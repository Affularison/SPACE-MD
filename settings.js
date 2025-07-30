require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIABdy*lrsF*uaUQQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVmAYRuUR0xCIioqA4eGs25qGEEkqu1kWkJ*z3Cezp6XnYne3lqcjKyDx58pz6DsoKU7RALdC*g5rgK2SoO7K2RkAHY346IQL6IIYMAh305tHKcpx4dpvM3RtkyfBlervW4cYzRtFFodrBa+bFygoL9Rnc+6DmxxxHfyjIpcLI1pH84ofH*OmEHLazt*yQS*G5uCzrwkOrq1cnklXSZ3DvKkJMcJlYdYoKRGC+QK0PMfkc*JV7kUx1qtkvzsWjN23zouyeYitRRq+awNYziU9FdYnDSPI+Bz8NkjA9G+oq2x0325U3sAevT3y6ESvl1RjJ26Y8rrNJZC6F6g0+xUmJYidGJcOs*TTv2XIlFNgK0mVgSysf1+0cbSyl8XZ0wtxwauU7xV1qZrCLPgd8PvYdpRWaFmlSEcSjma1UiXueX47Va4GPVyYSkQiMRDvjd+A+eddK9n949xxhVoSbel0UxJ4Y+Xa2NsYzKU9lc17b8UnKZzxhkvQyWH8Ofi5f3YtmTGc8Hajs1pvER7NUV1pgxNfS1nLYmxolCtqnsfUBHzJO*oRyM9nPXUX6mrq9GR9VqcP3m2t4IlUC9yITFbkeLZpJvFGIEOF1wyecrO3hAk7UsmVSM0*PW3+3P56yTe91Hyjl9jrYnZPnx0QZap0Y6OK9DwhKMGUEMlyVj5g86gMYXwMUEcQe9IKzuMxkaRuc9pxyv9kfxD2exnMpOmLVnLQv0wjj4VQ5lm31DPqgJlWEKEXxDFNWkdZDlMIEUaD**a0PSnRjb4vr2kliH5wwoWxb8jqvYPy+1fdLGEUVL1nQlpHZHRABuvARRozhMqEdj7yEJErxFZkpZBToJ5hT9GtCRFAMdEY4+uVas4o74qXQcO2ptQd9UDwWgmOgg4EkycJQEoeCOtJF8S*6penKwrr+UiIG+iB*pA1laaCNlIGgSMPBsEvs4vdfALt6MWIQ5xTowHSxmY0S0*KOwcVb27ZBE8NMDPAx0Lsy3pi3e4zeZHOhHCZoCZvU3dU5MsM1963LDtVtZrLYcTa1lqnP*1AE6EBVl2oejenBry0qXtaukM*pMPFvI3q5eoZpRvPxWUxyJfTzrcJkadQUc6WHFKwEuDrydPOVH7SbdZAzgmcubLPKMprnrluMrjhCvzebMD83KTYryvE+G*OXteXEjhk5XNNivrJHPul5dXw28*2uN95Lt3AMGxEV4fRJM+XXxXnY+nscimFhHsdjKTEKJcbrN80+PJP*fKvwQ03dqrrfE0YP65ewW+B*r+4NeKcw4d7*rcbPx+RfDDn+eiVHD60xFxvpvKdOIMLwkBRb93xb5IdLVBvkEJjW6BT64H7*1gd1DtmpIgXQASxjUuEY9AGpeCdZpzxVf2hmGlvH+unWHFJmfNhggwtEGSxqoIuKLKmqLAiDtyyfVPUM0rQjwR4aBe803Rp1HTDI3l0FjO5bLF1w*wFQSwECFAMUAAAICAAXcv5a7Bf7mlEEAABxBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
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
   PREMIUM_KEY: process.env.PREMIUM_KEY || '11223344',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 100,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
