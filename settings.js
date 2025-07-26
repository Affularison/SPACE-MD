require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADyk+lrbw2TwUAQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGBCUixEdsYA3BBS868Y+lFBgNVerChAn*PcNdHp6HnZne3kqsjIyT55zsr6DLMcUWagBw++gILiCDLVH1hQIDIFehiEioAsCyCAYArRAlDt1Th1zv7hVdcBJzS31msleD6ASxlcPVuZWkfST4L2BRxcU5TnB*m8K0lKcZevjKPWnqeqnsV3VOW12vWmBnXCj6Ku+hDo00cSJ8wYebUWICc6icXFBKSIwsVDjQky+Bh*Pk6xZecep0tgT0eYSjGZ7JF8NrN4XvRmdz8zoGkr1Ps2*Bt89cHbOu5aXjg2Fc4pG8ASir2vVUO63UN7V96JzSBZrf2S+4FMcZSgwA5QxzJov8y5NufzcF8wbljm6zI4hvx2VlWO6keEPeofRTrXNOcnUYPtF4Im9ei+NWJlVx9LVePscp3CxvsHgcDC4Lc7QeZKdQ5XJm*6vwF3y4ZX4**AejeTj5riQd6uYn1YdWZ5lcFPOjLntDRaSdpyHiotJGSei+TX4J72SlnG+49*zpaWr73pR7RXS3D1Z2e5NaWVQ+wyl03xvOJ*wISvJ71BOdFnolxLeMm1CDBMLQh5PbqqhVyN*POHuXCyR816w*Q31fHrhdQcpgcUfnSQP8Ho9594H2e6W1ys5Zpy9tcjV8TXv7TlRjBozAMPeowsIijBlBDKcZ21M6PFdAINqjXyC2JNegON4ZdA6a65mT9lt5YGyRVVDNfVyl28qZcfcdewGhrTi30AXFCT3EaUomGHKctI4iFIYIQqGf*7VBRm6sZdwbTux1wUhJpRts7JIchh8qPpxCX0*LzO2bjLfaA+IgCH*GUaM4SyiLY9lBol*wRUyLpBRMAxhQtHPCRFBARgyUqKfW2vkQUv8WDkJe3ejgC5In4LgAAyBIIoDvi*2+rwiDVX+D*qtbsvCoviWIQa6IHmm9QeioEqywMtiX+i3iW388RNgWy9ADOKEgiEwbGjEUmSMrVBMHG861WikGZEGPgf6cMaL+WmH0dvAsOTDCC1gfbF3RYKMk1e64+sOFU1ssMA0N4UaK2**UAQMwSofT5ZVj+MCulzlAhkNPGsR1TW9TZryWA28gS4FWZSPEdI36XhGKqWnCWyAhIOy9fG9qtYly4JAGE1cw0KXtXW1De2t7RagCvvo12ZBfTo6V50xtU80bdmxKlsrXQ13aH2an8pDvnFEjpNcWQn0HbtKFa0n2mHkb87HXeOd8Pl8GOVGfd*kk23JPFGHS1GrX5597kzy463CTze1UrW*IUbP1c9gK+B*S*cC3jqMf3R*qfHjMfmXhdRXFTk7yMNlrxbf99Rc9+DpEKVb+*1mJYerX2jksDbGUnhywePxVxcUCWRhTlIwBDALSI4D0AUkL1vLmlmY*6aZoW3NcfSaPIGUaZ9rsMEpogymBRj25IE4kAReUF5ZLsmLGaSXloRpX0vL1tONVhRrBtnHVgGt*SxHBo+*AVBLAQIUAxQAAAgIADyk+lrbw2TwUAQAAHEHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
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
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
