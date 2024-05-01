const Redis = require('ioredis');

// Create Redis client
const redisClient = new Redis();

// Handle connection errors
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

module.exports = redisClient;
