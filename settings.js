require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAPuwFls65reMUAQAAGwHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVmgZBEaq6agARwRuoKLg1DxEChLskqDjlf9+ine6eh93ZXp7CSerkO98lP0FRYoLmqAXST1DV+AIp6pa0rRCQgNKEIapBHwSQQiABZCBLTnl83IxmnOLmShh7seLOluu8CYtRspg7K8W5iI3LvIJHH1TNKcP+HxpWanXVA8vtLQfs*lRQW9VwOL0GBq+23pHbmC9yr77tEm9TvoJH1xHiGheRVsUoRzXM5qi1IK6*Br9dj+96RpWIu+20RQvlZrvHzGC736alPSlJIp*z2rxeGt3*GvwrX+BCXZplrThiaifatjn2eqtxwo72vHPs3WMhQe0AH3L7CZ*gqECBEaCCYtp+mXd1CcOecD+P26UdIMuM5Jf7Pc6pnQ0VeDnd5*ZoYptUv2vO14BjZTuNVyEsD*Z94m5mJRmYQ+68zkanU1EIN9tUHG3CN+R6*R24Vb97Jf0*vPP6MBbOBzNHdn3BzrFnDJc3eZmfFW0wGueHtTf1mMXBqPbjr8E*lYtCbhjoMOvjgJMPrpjaK27aM1tuyKZi2jqL*aHHHQ9b*hM+pE39J5QbdeAo8kmPd2pzXtMVq9uire2maavfFsFZuMiK2mYj98iWw1F4U9KilzLB4JCr6iKguw0+DQhbGMmF9*N0mtel*jLA8uvbRClqjQBI7KMPahRhQmtIcVl0NZ7pAxhctsivEX1jFyg5gwUtGCZ+abNzw17PhEzpxUPrLuwxSvSEQXAcpaqVLl9BH1R16SNCUDDDhJZ1u0SEwAgRIP31ow8KdKNP3brbOLYPQlwT6hRNlZUweBf1fRP6ftkUdNsWvtotUA0k5rOMKMVFRDoamwLWfowvSI0hJUAKYUbQx4CoRgGQaN2gj9CqZdDxPnHnA3em2KAP8jc9cAAkMBDGnDgSWGYkSMJ38u3aNYVV9a1AFPRB9jzEjsdDXhR4jh0NRUYSvnf1xwe8rluAKMQZ6VJjWTLvR4q2cJ1y7Oi6bESyGsngc5x3Wzx5T9jcTOaqV60XrjrBole5Rm+esLid0KAUayJkiR67OyIzr**QpFPuTl68C7ckeWO20XguWpbCeI2qEcZpVnttcGIO*jYzkZEuNf6g7xmfY506MCfVrhXG58XF7+15PclVdjF14zEuXVPtPNQHAbpgH*1+mTe7iac8zRdxEiFzE85jXTjn8*yMttdpS2fe5ra8kRsr+rNlJhOH37o01l4GSc7droGqb4ImuEcFe4xia3+zciM*Ht4N+xaY7NdDhd+81AnV*YYYveW+gJ18*yXcE3bnLubR*63Dr3fkX7KoeOIRe22Uz3eYvUb85TDftxYuRY9EggstKKyH3q3cM4K8Ao*Hjz6oMkjDss6BBGAR1CUOQB*UZdPZ1SjC8k+vq8wYcvScO4OEyp8R2OEcEQrzCkisMByKDMML*POUVZfVDJIYSIDbiEdO7PzcylW1pZC+JwrI3bc2VPD4G1BLAQIUAxQAAAgIAPuwFls65reMUAQAAGwHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '27839671067',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 10000,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Affularison',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 100,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
