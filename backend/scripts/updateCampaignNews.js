const mongoose = require('mongoose');
const Campaign = require('../models/Campaign');
const News = require('../models/News');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/harumcare', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function updateCampaignNews() {
  try {
    console.log('Starting campaign news update...');
    
    // Get all campaigns
    const campaigns = await Campaign.find({});
    console.log(`Found ${campaigns.length} campaigns`);
    
    // Get all news
    const news = await News.find({});
    console.log(`Found ${news.length} news articles`);
    
    // Update each campaign with related news
    for (const campaign of campaigns) {
      // Find news that might be related to this campaign
      // You can customize this logic based on your needs
      const relatedNews = news.filter(article => {
        // Check if news title or content contains campaign title or category
        const titleMatch = article.title.toLowerCase().includes(campaign.title.toLowerCase());
        const categoryMatch = article.category === campaign.category;
        const descriptionMatch = campaign.description && article.content.toLowerCase().includes(campaign.description.toLowerCase());
        
        return titleMatch || categoryMatch || descriptionMatch;
      });
      
      if (relatedNews.length > 0) {
        // Update campaign with related news IDs
        await Campaign.findByIdAndUpdate(
          campaign._id,
          { 
            $addToSet: { 
              relatedNews: { 
                $each: relatedNews.map(n => n._id) 
              } 
            } 
          }
        );
        
        // Update news with campaign ID
        for (const article of relatedNews) {
          await News.findByIdAndUpdate(
            article._id,
            { campaignId: campaign._id }
          );
        }
        
        console.log(`Updated campaign "${campaign.title}" with ${relatedNews.length} related news`);
      } else {
        console.log(`No related news found for campaign "${campaign.title}"`);
      }
    }
    
    console.log('Campaign news update completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error updating campaign news:', error);
    process.exit(1);
  }
}

// Run the script
updateCampaignNews();
