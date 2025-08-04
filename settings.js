require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADeuBFsDvcK1VQQAAHEHAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3nVGhUQ0aquWqRREVE+RMGtfYgQMIoBkwDSU*73Lezp6XnYne3lKdzcuvfcc8*Jd0ByzJCJGjD5DgqKK8hRe+RNgcAETMskQRR0QQw5BBNgTW*hUg9rV7qJJ39d6+lh1tuX+9s2dSwl6fVrZ9k51+ppFr6ARxcU5THD0W8Kqglsmsve2FX2cTavRwcSDOW5ItoDzVL6591hpnq5EXK30V*Ao60IMcUk1YsTuiIKMxM1NsT0a*Ad03de07NUrd7mNWFYZueO0hzt4vUsb*bbMQtnF7ZdSkcifQ1+tZNms9mFT4n6Jifr104yE2m4cxZTHY*XceWc6T31yVL3onf4DKcExUaMCMe8+TLvV4tli6YSSu0+DnN5utL2*LL0mG1vo5F8e13Y9tg3Q9X3*a8BH+dqqI6ddTXyda9SpHRaDetDGOvhKqiE2fyy8XqLoHzzzuqvwG36oZXL*+FdsFzTkuaOie7ZYOcsmH7i2qjTcQSijvYk7WO78f1RtgmcL8K*VoQo860aNrXqiHR29g7z9WGU7*CeU8iilSsHy3rBnf4nfMhL+juUb9sTdTWaG7dERwl279FtKG7kxEbaZXUVieR5ZKvWd9Vzb69alp*dTROvrZHuD8uiEbb99GZFcVUahYELdC3f7jHS0pfnRBfUGDGYDB5dQFGKGaeQ45y0MUEadgGMKw9FFPEnvUC3EvG4io4ndrwt1UgL+sZyK+M+XR2jSkveEq2*WK9M5YrYC+iCguYRYgzFC8x4ThsLMQZTxMDkz7+6gKA7f19c204cdEGCKeM+KYssh*HHVj8uYRTlJeFeQyKtPSAKJv3PMOIck5S1PJYE0uiEK6SdIGdgksCMoZ8TIopiMOG0RD9dq+VxS*x45iq76WIAuuD6XAiOW5GI4rAviQOpr8gTQfyDfavbsrAovhHEQRdkzzRpKApjeST0R6IkSG1iG3*8BNjWixGHOGNgAjTL1C5yqul2sLtbznyuGqmqpSr4HOhDGe*Mzzuc3YeaOQpe0RrWp9WuyJB2cEpbv+1Q0Vw0HhvGthhflJd*KAImIPKH5Gxi0jhpj*SWjuKO2diW6+VpudKj4c0seQ8HJ8OrjMAUzJEqOyef5FshebUaKT1eOufoMnWPDpKmwgIPN9e7rdYvbbcYVThCvzZzUVhlOhesIggXAzhe6XvfRModJvFNcgrFMMx4kR6VVdjp5NOsk6yvs8hea4mwgZflQO*Ng4G9w2U0FJdcPmhRedNV512zT89kP94q*FRTu6r2N8HoaX0C2wX+9+regbcK6z+6v9T48Zj8iyGnbkWPFnJwOajF854Z3gAegvTqr853MwtuUaHSwNN0OTnY4PH4qwuKDPIkp1cwAZDENMcx6AKal61kDZLkv2mmqb6h*3BrBhlXP22wxVfEOLwWYDIYDSVRkgbK8D3LpnmxgOzUkjCX1GvZarpRi8LjkH+4CqjtN3UT8PgbUEsBAhQDFAAACAgAN64EWwO9wrVVBAAAcQcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAfQQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233504314086',
  
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
