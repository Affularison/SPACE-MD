require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAAZMBlufQ7DdUgQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3ptY0S5akRHLIIiKiggaruxDyUUUIJcqgoRJ*z3DezpmX7Yne3lqcjKyDx5zsn6DvICU7RELRh*ByXBV8hQd2RticAYTOooQgT0QAgZBGPALWiJk1092A3dDZ9757d0H55ZcxvhyfRQNWKlifVWcfuZ9QoePVDWpwwHvymY7gJnL*K0nSzv9mJ13+*MpZFlxNiimqtsa1hAiYtNpfL9V*DoKkJMcB5PywRdEIHZErUbiMnX4AeGvbzPFfWKW79*s5moByG3Km6TlKSjdpGdbGZy2ibWdl+Er4TrXcQ3vO5a8shhtR4fbidDlkaL9JpdhXhH1VVy807ldvoOn+I4R6EZopxh1n6Zd2lSQN888gtFn2eGJ88vqTtjVTgyeL8*1aYXfDTZ2lOWfPw14AVuuEF1q1f7RXK2c6Fx+AHXmI053R*l*gJTM7Rde+ONJsJn4Bvy4ZX0**A+NGd3J8tMXRydLbSaRJwrT110lDRRE+Z9+2XkFvdqsmV++jX4wna6K24eJIWzXxoCEyuaHLYzvz9baMHcgPJ1th8ppUvnn+BDVpPfoayiy3buZ+VQn12L49LHEp4Lcra*m4NioofnBQ5ickDZkNtWaWYJ2smsTk0j6Wvd2u*7w+uI1D7hydazsjWalTGFntq8PidKUWuGYDx49ABBMaaMQIaL*BkThR6A4dVDAUHsSS+wypiEnmsPDnZlQSM5v+nehY5OSBcimiapkQ5efHmdmBvnFfRASYoAUYrCOaasIK2FKIUxomD85189kKMbexeua8cPeiDChDI*r8usgOGHqh+XMAiKOmdemwdad0AEjLlfYcQYzmPa8VjnkAQJviItgYyCcQQzin5OiAgKwZiRGv3cWq0IO+Jll59uVqIFeuDyFASHnUl4XuQEfiBwijQeSn*Qb01XFpbltxwx0APZM00Q+eFIkoeczAtDoUvs4o+fALt6IWIQZxSMgWYttVSKtenipN0txzBUP1a1WAW*BvpwxjvzxgujN1Fbygcd2bBJVrsyQ9rRqTfTaofKNtVYaJrbcpQqr*9QBIxBf79pg5mQlLPD5VAFL1ibZQo2b*PtEc4EAiM9a9ZroVk3VtlGR0XIJdwuRgcrWLU77Ahxq9DKWksXe4EUvV97Rsm0zkY9EKIrDtDnZqKtmoLo+Diqoq0o9mUumcaYrLC1wVYjLUth8bY*J6pzut9Sge*LmeBsThPZdpB7Pkd95AdvspX6*lo*K*uh+sZiqjrvnn3uTPbjrcJPN3VSdb8RRs*Vz2En4H9L9w68cxj36H2q8eMx+ZeFnLhXcrKQg+tBw5*31PQG8HiIL*7qfFtmhyooVXLwtKkUHTfg8firB8oMsqggFzAGMA9JgUPQA6SoO8uaeVT8ppmm+uY0fp88g5Spv9Zgiy+IMngpwXggi4IgD2Wee8*akKKcQ5p0JBiCeqk7T7dqWXoMso+tAmr3TdwYPP4GUEsBAhQDFAAACAgABkwGW59DsN1SBAAAcQcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
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
   PREMIUM_KEY: process.env.PREMIUM_KEY || 'c942894a334089fee08d4aaba25095
bcea3a03a6da8d26eb1eb9223e8a 71569c',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 100,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
