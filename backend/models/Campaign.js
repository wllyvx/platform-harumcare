const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  // Basic Information
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  description: {
    type: String,
    required: true,
    maxlength: 5000
  },
  shortDescription: {
    type: String,
    required: true,
    maxlength: 300
  },
  
  // Creator Information
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Financial Information
  fundraising: {
    targetAmount: {
      type: Number,
      required: true,
      min: 1000 // Minimum IDR 1,000
    },
    currentAmount: {
      type: Number,
      default: 0,
      min: 0
    },
    currency: {
      type: String,
      default: 'IDR',
      enum: ['IDR', 'USD', 'EUR', 'GBP']
    },
    donorsCount: {
      type: Number,
      default: 0,
      min: 0
    }
  },

  // Campaign Timeline
  timeline: {
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: {
      type: Date,
      required: true
    },
    duration: {
      type: Number, // in days
      required: true
    }
  },

  // Media
  media: {
    coverImage: {
      type: String,
      required: true
    },
    images: [{
      url: String,
      caption: String,
      uploadedAt: {
        type: Date,
        default: Date.now
      }
    }],
    videos: [{
      url: String,
      title: String,
      duration: Number, // in seconds
      uploadedAt: {
        type: Date,
        default: Date.now
      }
    }],
    documents: [{
      url: String,
      filename: String,
      fileType: String,
      uploadedAt: {
        type: Date,
        default: Date.now
      }
    }]
  },

  // Category and Tags
  category: {
    type: String,
    required: true,
    enum: [
      'medical',
      'education',
      'disaster_relief',
      'community',
      'environment',
      'animal_welfare',
      'sports',
      'arts_culture',
      'technology',
      'business',
      'other'
    ]
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: 50
  }],

  // Location
  location: {
    country: {
      type: String,
      default: 'Indonesia'
    },
    province: String,
    city: String,
    address: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },

  // Campaign Status
  status: {
    type: String,
    enum: ['draft', 'pending_review', 'active', 'paused', 'completed', 'cancelled', 'rejected'],
    default: 'draft'
  },

  // Verification and Approval
  verification: {
    isVerified: {
      type: Boolean,
      default: false
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    verifiedAt: Date,
    rejectionReason: String,
    verificationNotes: String
  },

  // Donations
  donations: [{
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    amount: {
      type: Number,
      required: true,
      min: 1
    },
    message: {
      type: String,
      maxlength: 500
    },
    isAnonymous: {
      type: Boolean,
      default: false
    },
    paymentMethod: {
      type: String,
      enum: ['bank_transfer', 'credit_card', 'e_wallet', 'crypto']
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    transactionId: String,
    donatedAt: {
      type: Date,
      default: Date.now
    }
  }],

  // Updates and Progress
  updates: [{
    title: {
      type: String,
      required: true,
      maxlength: 200
    },
    content: {
      type: String,
      required: true,
      maxlength: 2000
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],

  // Analytics and Statistics
  analytics: {
    views: {
      type: Number,
      default: 0
    },
    shares: {
      type: Number,
      default: 0
    },
    uniqueVisitors: {
      type: Number,
      default: 0
    },
    conversionRate: {
      type: Number,
      default: 0 // percentage of visitors who donated
    }
  },

  // Comments and Reviews
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true,
      maxlength: 1000
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    replies: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      content: {
        type: String,
        required: true,
        maxlength: 1000
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }]
  }],

  // Withdraw Requests
  withdrawals: [{
    amount: {
      type: Number,
      required: true,
      min: 1
    },
    reason: {
      type: String,
      required: true,
      maxlength: 1000
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'completed'],
      default: 'pending'
    },
    bankDetails: {
      bankName: String,
      accountNumber: String,
      accountHolder: String
    },
    requestedAt: {
      type: Date,
      default: Date.now
    },
    processedAt: Date,
    processedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    notes: String
  }],

  // SEO and Sharing
  seo: {
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true
    },
    metaTitle: String,
    metaDescription: String,
    socialImage: String
  },

  // Features
  features: {
    allowComments: {
      type: Boolean,
      default: true
    },
    showDonorsList: {
      type: Boolean,
      default: true
    },
    allowAnonymousDonations: {
      type: Boolean,
      default: true
    },
    enableSharing: {
      type: Boolean,
      default: true
    }
  }

}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual fields
campaignSchema.virtual('progressPercentage').get(function() {
  return Math.min((this.fundraising.currentAmount / this.fundraising.targetAmount) * 100, 100);
});

campaignSchema.virtual('daysLeft').get(function() {
  const now = new Date();
  const endDate = new Date(this.timeline.endDate);
  const diffTime = endDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(diffDays, 0);
});

campaignSchema.virtual('isActive').get(function() {
  return this.status === 'active' && this.daysLeft > 0;
});

campaignSchema.virtual('totalRaised').get(function() {
  return this.fundraising.currentAmount;
});

// Indexes for better performance
campaignSchema.index({ status: 1, 'timeline.endDate': 1 });
campaignSchema.index({ creator: 1 });
campaignSchema.index({ category: 1 });
campaignSchema.index({ 'seo.slug': 1 });
campaignSchema.index({ createdAt: -1 });
campaignSchema.index({ 'fundraising.currentAmount': -1 });
campaignSchema.index({ 'analytics.views': -1 });

// Pre-save middleware
campaignSchema.pre('save', function(next) {
  // Generate slug if not provided
  if (!this.seo.slug && this.title) {
    this.seo.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  // Calculate duration
  if (this.timeline.startDate && this.timeline.endDate) {
    const diffTime = this.timeline.endDate - this.timeline.startDate;
    this.timeline.duration = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  
  next();
});

// Methods
campaignSchema.methods.addDonation = async function(donorId, amount, message = '', isAnonymous = false, paymentMethod = 'bank_transfer') {
  this.donations.push({
    donor: donorId,
    amount,
    message,
    isAnonymous,
    paymentMethod,
    paymentStatus: 'completed'
  });
  
  this.fundraising.currentAmount += amount;
  this.fundraising.donorsCount += 1;
  
  // Update analytics
  this.analytics.conversionRate = (this.fundraising.donorsCount / this.analytics.uniqueVisitors) * 100;
  
  return this.save();
};

campaignSchema.methods.addUpdate = function(title, content, images = []) {
  this.updates.push({
    title,
    content,
    images
  });
  return this.save();
};

campaignSchema.methods.incrementView = function() {
  this.analytics.views += 1;
  return this.save();
};

campaignSchema.methods.incrementShare = function() {
  this.analytics.shares += 1;
  return this.save();
};

// Static methods
campaignSchema.statics.findActive = function() {
  return this.find({
    status: 'active',
    'timeline.endDate': { $gt: new Date() }
  });
};

campaignSchema.statics.findByCategory = function(category) {
  return this.find({ category, status: 'active' });
};

campaignSchema.statics.findTrending = function(limit = 10) {
  return this.find({ status: 'active' })
    .sort({ 'analytics.views': -1, 'fundraising.currentAmount': -1 })
    .limit(limit);
};

campaignSchema.statics.findRecentlyFunded = function(limit = 10) {
  return this.find({ status: 'active' })
    .sort({ 'donations.donatedAt': -1 })
    .limit(limit);
};

module.exports = mongoose.model('Campaign', campaignSchema);