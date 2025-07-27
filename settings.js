require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFqY+1pHwFsehwQAAPgHAAAKAAAAY3JlZHMuanNvbpVU2Y6jSBD8l3q1NZzmsNTSctoG37e92ocCCiiba6rK2Hjkfx*h7p6e1cyOenkqkiIzIjIyv4GixBT5qAH9b6AiuIYMtUfWVAj0gXmJY0RAF0SQQdAHI2M17MH7AXNffd29jDd24uvz2Qn1sL3PFrudJO1lMqVDyXkBjy6oLkGGwz8kDA89wpMeF0SiVo0HYVaE4WBiCUMSdKpQC*Zj7Wa62l7eb17Ao80IMcFF4lQpyhGBmY+aOcTkc*AP854zLne+VBoQB+mOjVfp3o2wzc9UfV83y*iYOjO43jijz8GXO951pvXGWjjvhL3ytlp7AadogoLl6+1aHULBuU0vmuFli1f4FCcFikYRKhhmzad1n4x9fz41q8xHW33hndTSaAxoTetbFGjBsbw5eyvarSZKPvkc8CunpcFwkJTbKYyOBpENxZ1qYQIN7eYZSeHZJFo0xN279Gfgc*LulfP*0d3xquImREJnKq6M4+Ws487m5IuyghOXz6fX5XJGQzdQROmT8LVoNE6bazU8G5OZ4y1PYcJdnSgKkTo69hQHH0wvrmtls+Q*4EN2IX9CmZUcrfc4ngtuLpbuWc9MszOznMNpnYjjcig0PKuH1JXqajO*zFTb561pb60GUkcc6clWUDhrfV9zwolHUiIffQuldvLyZHRGzSgCfeHRBQQlmDICGS6LZ0yQugBG9QqFBLGnvOBuc*F2NciUpXmF*DyYcWJgu8tpXUu+xi92nfMNDsuqMxmfX0AXVKQMEaUoGmLKStJMEKUwQRT0*352qiVNUF4y5OEI9IEoSaIsCKIu88pf9Ms1hYzCqvpSIAa6ICZlPkGgz8gFdcHzB17SHVGzJEl3FddQe4LI9xzHtg2VFx3ZcluK+WvRNc4RZTCvQF9Qe5Iii7oqPf7pggLd2Kt*WtaS0AUxJpRtikuVlTB6N9f7RxiG5aVgq6YIrfaACOjzH2HEGC4S2jK7FJCEKa6R1fIA*RhmFP0QGhEUvXN5Wx5WGbX99yTV2i19HbTY20S*aNMXhV*lyZ7XdL2niILMi7IiqFJ7sY0*fgBs80WIQZxR0AfWZKYzSG1nGtR5uBgMDCcxrMQAH4TeDfpqAFOqaTKZb+7V6e7lRyUZrwZHQrFSCXkjctwYbZk+o9Dd0ZffJGl53HsaSYrKSrF*0Bf2LdWETNZ9uMxGwWrNL93M3Zpesqt1MzkEN4PbdzaN3DjNqbyfpPvxKucnbWvc6Ul3LFKtD4Fptm7uggjVOET*Knastvv11bNd2zF9ZW0KyVfPoZG1uVxVvE+4SIrsqeDJwn14t22Td6e7wcofqBNtcXY2w3nHmSmpAWN2gmSaaVvD1izjdXSeo5u9rUz8Zmr8fI0xem6gAuboM617Bd46jH90f8rxttP+Yy+Yi0hVR7YtTJSD1hxzVFp8mkN1dPkaHSmruUbKgnhNBumWgEdr9SqDLC5JDvoAFhEpcQS6gJSX1rKjIi7*UMwy+JHxtjQySJnxMQa*myz+9daclNUQ0rQVYS4c0rj1dGNU1YpB9j5VwGgfb5KDx3dQSwECFAMUAAAICABamPtaR8BbHocEAAD4BwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACvBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233241129406',
  
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
   PREMIUM_KEY: process.env.PREMIUM_KEY || '12345678',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
