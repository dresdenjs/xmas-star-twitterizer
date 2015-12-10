var io = require('socket.io')(9999);
var Twitter = require('node-tweet-stream');

var tw = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  token: process.env.TWITTER_TOKEN,
  token_secret: process.env.TWITTER_TOKEN_SECRET
});

tw.on('tweet', function(tweet){
  console.log('Tweet', tweet);
  console.log('Someone tweeted about ddjs-stars...');
  io.emit('tweet', tweet);
});

tw.on('error', function(error) {
  console.log('There was an error:', error);
});

console.log('Tracking ddjsxmas with token', process.env.TWITTER_TOKEN);
tw.track('ddjsxmas');
