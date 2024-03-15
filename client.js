const { TwitterApi } = require('twitter-api-v2');

console.log(process.env.TWITTER_APP_KEY);
console.log(process.env.TWITTER_APP_SECRET);
console.log(process.env.TWITTER_ACCESS_TOKEN);
console.log(process.env.TWITTER_ACCESS_SECRET);

const client = new TwitterApi({
    appKey: process.env.TWITTER_APP_KEY,
    appSecret: process.env.TWITTER_APP_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const rwClient = client.readWrite;

module.exports = rwClient;