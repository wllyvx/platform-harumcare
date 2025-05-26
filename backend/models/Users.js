const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Basic Authentication
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6
  },
  role: { 
    type: String, 
    enum: ['admin', 'donor', 'campaign_creator'], 
    default: 'donor' 
  },

  // Profile Information
  profile: {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    avatar: {
      type: String,
      default: null
    },
    bio: {
      type: String,
      maxlength: 500
    },
    phone: {
      type: String,
      match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
    },
    dateOfBirth: {
      type: Date
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other', 'prefer_not_to_say']
    }
  },

  // Address Information
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String
  },

  // Donation History & Statistics
  donations: {
    totalDonated: {
      type: Number,
      default: 0,
      min: 0
    },
    totalCampaigns: {
      type: Number,
      default: 0,
      min: 0
    },
    donationHistory: [{
      campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campaign'
      },
      amount: {
        type: Number,
        required: true,
        min: 0
      },
      donatedAt: {
        type: Date,
        default: Date.now
      },
      isAnonymous: {
        type: Boolean,
        default: false
      },
      message: String
    }]
  },

  // Campaign Creator Specific Fields
  campaignCreator: {
    isVerified: {
      type: Boolean,
      default: false
    },
    verificationDocuments: [{
      type: String,
      url: String,
      uploadedAt: {
        type: Date,
        default: Date.now
      }
    }],
    organizationName: String,
    organizationType: {
      type: String,
      enum: ['individual', 'nonprofit', 'charity', 'business', 'other']
    },
    taxId: String,
    campaignsCreated: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign'
    }]
  },

  // Account Settings
  preferences: {
    emailNotifications: {
      campaignUpdates: {
        type: Boolean,
        default: true
      },
      donationReceipts: {
        type: Boolean,
        default: true
      },
      newsletter: {
        type: Boolean,
        default: false
      },
      campaignReminders: {
        type: Boolean,
        default: true
      }
    },
    privacy: {
      showProfile: {
        type: Boolean,
        default: true
      },
      showDonations: {
        type: Boolean,
        default: false
      }
    },
    currency: {
      type: String,
      default: 'IDR',
      enum: ['IDR', 'USD', 'EUR', 'GBP']
    },
    language: {
      type: String,
      default: 'id',
      enum: ['id', 'en']
    }
  },

  // Security & Account Status
  security: {
    isEmailVerified: {
      type: Boolean,
      default: false
    },
    isPhoneVerified: {
      type: Boolean,
      default: false
    },
    emailVerificationToken: String,
    emailVerificationExpires: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    loginAttempts: {
      type: Number,
      default: 0
    },
    lockUntil: Date,
    twoFactorEnabled: {
      type: Boolean,
      default: false
    },
    twoFactorSecret: String
  },

  // Account Status
  status: {
    type: String,
    enum: ['active', 'suspended', 'deleted', 'pending_verification'],
    default: 'pending_verification'
  },

  // Social Media Links
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    website: String
  },

  // Timestamps
  lastLogin: {
    type: Date
  },
  ipAddress: String,
  userAgent: String

}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual fields
userSchema.virtual('profile.fullName').get(function() {
  return `${this.profile.firstName} ${this.profile.lastName}`;
});

userSchema.virtual('isAccountLocked').get(function() {
  return !!(this.security.lockUntil && this.security.lockUntil > Date.now());
});

// Indexes for better performance
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.index({ 'donations.donationHistory.campaignId': 1 });
userSchema.index({ createdAt: -1 });
userSchema.index({ status: 1 });

// Pre-save middleware to handle password hashing (if needed)
userSchema.pre('save', function(next) {
  // Update lastLogin timestamp when user logs in
  if (this.isModified('lastLogin')) {
    this.security.loginAttempts = 0;
    this.security.lockUntil = undefined;
  }
  next();
});

// Methods
userSchema.methods.addDonation = function(campaignId, amount, message = '', isAnonymous = false) {
  this.donations.donationHistory.push({
    campaignId,
    amount,
    message,
    isAnonymous,
    donatedAt: new Date()
  });
  this.donations.totalDonated += amount;
  this.donations.totalCampaigns += 1;
  return this.save();
};

userSchema.methods.incrementLoginAttempts = function() {
  // If we have a previous lock that has expired, restart at 1
  if (this.security.lockUntil && this.security.lockUntil < Date.now()) {
    return this.updateOne({
      $set: {
        'security.loginAttempts': 1,
      },
      $unset: {
        'security.lockUntil': 1
      }
    });
  }
  
  const updates = { $inc: { 'security.loginAttempts': 1 } };
  
  // If we have reached max attempts and it's not locked already, lock the account
  if (this.security.loginAttempts + 1 >= 5 && !this.isAccountLocked) {
    updates.$set = { 'security.lockUntil': Date.now() + 2 * 60 * 60 * 1000 }; // 2 hours lock
  }
  
  return this.updateOne(updates);
};

// Static methods
userSchema.statics.findByRole = function(role) {
  return this.find({ role });
};

userSchema.statics.findVerifiedCampaignCreators = function() {
  return this.find({ 
    role: 'campaign_creator',
    'campaignCreator.isVerified': true,
    status: 'active'
  });
};

module.exports = mongoose.model('User', userSchema);