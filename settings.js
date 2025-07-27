require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGmm+lo0s1MnUwQAAHEHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGEFuYkRHLKIiIoLtBZuNfSihhNLiYlGAMOG*b2BPT8*D7mwvT0WSkXXy5DnJd5BmuEAWasD4O8gpriBD3ZE1OQJjMCnPZ0RBH4SQQTAG+oxbnjxTVSripG9+krG5V4XJZCfFUzxfbVCmJMPBpPI88QU8+iAvTwQHvym4d6UiY7m4wwVVVrvbZRgpVmakgjhw3uTlrW1Pc6f3ttouNi*g0VWEmOI0muUxShCFxEKNCzH9GnzO3GtyPJMW1Xwbp7tFY5SFK5hLm05u96n56sFStiZlUB9GX4N*siG6zchRussHc34xnJ1TTbZBOhD8WXPg7bOhIkWKI2+zf4df4ChFoRmilGHWfJl3cSG3chAXqzKQF8HpEl0H8prnVH4V9nr3ba4OmWKmZ04hs68BbyS*DdQ2kPHbNmqbpXEeuYuwOuDRaHf3AnEFBxON9xNvOPoVuEs*tHL9P7wHDq54zI+CU+uXN2eZEsdzXdnyBqpEB5wbGLIqHJW6*KpsyLFKy+XVfdurljkz28OrtkbzxLdm1UlfL*WWOHHlqURJok*4kJX0dygXysWIbmRtbnM*1Ln7WZsO0pvTyiO23El+MJJIVk7ue7l2F7u1aQnxJu7ZbODTfYjzIYn8Wxw3zEjKUbsR1teck9yp9vLs6IoaMwRj*tEHFEW4YBQynKXPGKf0AQyrLQooYk96gfw2vdSL2TIQrfZOYjOXBWGnqHvfJVyWFNjxAhQ5x9ONs19AH+Q0C1BRoHCBC5bRxkZFASNUgPGff*VBiu7sfXDddQLfB2dMC7ZPy5xkMPyY6sdHGARZmbJtkwZ6d0AUjLnPMGIMp1HR8VimkAYxrpAeQ1aA8RmSAv3sEFEUgjGjJfrpWj0LO+LFKS8I1toGfZA8B4JDMAZDQZA4UeBFbiSPVf6P4lvdlYV5*i1FDPQBeaaJkjBUZWXIKYI4FLvELv74CbCrFyIGMSm6hbWC+lWO9NlKGRB7YxhaHWl6pIHPhj6U8c680WPFXdIt5ThFa1jHq0NOkO5vSnd2O6C8ueosNM1drl5HL*9QBIzB9VQnrt32hM25LedXOT3Pc4WPNVyH9itxScXBPTueJhbRIrL3m2CJC2kk21rPmb*NczoTSxWv7Kt0VMsiUhtK4uM0euluC1GFA*TrZZG+aBYjt776I53XNi3xatErbzd*ExnSrmrU2jBle5r0hs5ySHElt6sNutZ7I1Xdi203Vqabt8NlOpTR4LQ7JaVYzz80+*QM+bGr8FNN3ai61zNGT+unsBvgf4*uHXinMO7R*6XGj2XyL4acvFb0ZKMNLvlauHiFueWhf4yS*epyt8jxFuQaPW71mXz2XfB4*NUHOYHsnNEEjAFMQ5rhEPQBzcpOsmZ6zn73a9P25ix675zAgmmfNtjhBBUMJjkY84okSLLAKdJ7lkuzfAGLuCPBELWk7DTdaHm+ZZB9uApo3WPZCnj8DVBLAQIUAxQAAAgIAGmm+lo0s1MnUwQAAHEHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
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
   PREMIUM_KEY: process.env.PREMIUM_KEY || '12345678',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
