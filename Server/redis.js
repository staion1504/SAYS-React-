// const Redis = require('ioredis');

// // Create Redis client
// const redis = new Redis();

// // Handle connection errors
// redis.on('error', (err) => {
//     console.error('Redis error:', err);
// });

// module.exports = redis;

const {Redis }=require('@upstash/redis')

const redis = new Redis({
  url: 'https://living-giraffe-51609.upstash.io',
  token: 'AcmZAAIncDE2Mzc5ZTMyZWUwNmY0YTU5ODhkMWM0OThjNWMzNzEyYnAxNTE2MDk',
})

module.exports = redis;

