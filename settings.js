require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIABWS*Fr6SKYwTwQAAG4HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nFmuYmAlVdNUjjpREVxOvWPEQIEEHAJIA45X*fwu6enofd2V6eQpI65zvfJT9BXmCKbNQC*ScoCa4hQ92StSUCOhhWUYQI6IEQMgh0UNkhd4uYzI35hDP3fmVePF7qh+hFxOn+dBsr9gtasuSwC57BvQfK6pjh4A8FV+ZYOgSO76wduAyE8VwLdrhsZ2M*biAdpZFkDwwvWdOJ9QzuXUWICc5jq0zQGRGY2ahdQky+Bh85g1r1hOipEaukgif+sOUvg7q17FtfWg3JUMjKAsmtZRVfg8+5uz2*djYD3jomXKCsbOtqhldXCRKSw8tImW5KZeHApSu*wac4zlE4DVHOMGu*zHs6Mgz7hRM9JnnaFMo39+yatDRNbdJyGZLKS8MLsguh9EXgl+1T4t60TLLa9WvtLvCYTNleiq*1IG5eZ9pcHK+tsBhWefM78CX58Er6f3hPx7ZyGsStL86Hrw69+oIa0dwSkyzalGfHdvx0cbyMGm38RfiLYOqOcnbC4m17uXrSTZVm8808sYzAWRnFwmUvmxESblLifsKHrCJ*QtncBGo285laqGm*yKmwvWb42Cimcn3yT3uhcKfcJUtKkU9ZHg7SYpgMVyh*PdXWaKGWzubonhqRHOr1ZiM*DeWmNiyzeX5MlKJ2GgJduPcAQTGmjECGi*yxp6k9AMN6hQKC2INesICTZJ4Wk1nr79CmieS9NElQdAkqY3n2vHBb8eK6Og6PefAMeqAkRYAoReEEU1aQ1kGUwhhRoP*1owdydGVvwnXtJKEHIkwoW+dVmRUw*FD14xAGQVHlbNXmgdktEAE6*7mNGMN5TDseqxySIME1MhPIKNAjmFH0a0JEUAh0Rir0K7VmEXbEL18dZ2VrI9AD54cgOAQ6ECWpz8uSIPOqogvf6bemqwrL8luOGOiB7HFL7kuipgxEfiDJoqwL37vt+y94XbUQMYgzCnRgzpCZKrFpTY9aTt3x2Ahiw4wN8DnOhy*eeB9zjF77pj3YvaA5bJLZpsyQeXCrpXXZoLJNTRZOp36pperzPxTprM4dhpK3m022dhLeZpi0*iG6eZciyPnFZlVkwljl23DJT8i1rvx8yWLBPXGz*ZDjamgXmqF6DVe+akcjWrAMbkexbBjPXbcQ1ThAvzdbLF9bb+DJp9XGQJmnXJFtH*dNy9OIz2SnDATVN7H*pK3UW9E3U3ut7me1Ksz2ir2PR4JhNHPRd8*W3vEqjbMc8nI04jfHPhKTvb9U+OGlTqjuN8LoEfwcdvL9p3BvuDt78ffebyXeX5J*SePQq8nRQS6uhEY6bel0JcDDLj6vZ6erne0uQWmQ3cq0lOiwBPf7jx4oM8iigpyBDmAekgKHoAdIUXV+neZR8YdmprGeWu+DZ5Ay4zMDPj4jyuC5BLow6EsDUVF44e3WkhTlBNKk42AsG+eqM3RrlOWKQfYRKWB0n+0MwP1vUEsBAhQDFAAACAgAFZL8WvpIpjBPBAAAbgcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233504314086',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
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
