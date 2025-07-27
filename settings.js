require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAKOT+1onvCvYUQQAAHAHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rFmEZAUCM6YhFppBEBFW8b+1BCgcWdqgLFCf99g+7p6XnYne3lqcjKyDx5zsn6DooSU2ShDky*g4rgFjLUH1lXITAFsyaKEAEDEEIGwRSYy5dsMTxGdXxIxPCYEDZ84QT76AgcNIynSD7bqn1bX2c7+xk8BqBqzhkOflMw4UcevaurERGUK8s3eWOfFR45DnY5IXfGI6w7ynLrrnfpM3j0FSEmuIj16oJyRGBmoc6FmHwNvmXVt5kl83AujvcUBXybsOpI0Lm8T3JoDldjas3uxW6b8V+DX*seN3eL46rG5SGD6j5wXpQXcc221hzbncnG1D3t1iXSzHf4FMcFCs0QFQyz7su8d8vEts3Yi*G+cJCY7oWWWG7e2t7E20+OnBgf9fRQS61ffg24tPBn2iUNTpmXpoYrxM6kjMRy7lnErXcxx0XpvIG+XHn0V+Au+fBK+n94D+av8EpmXnLl5d0rnetOzrX3s2RW3jr2I+P26nBDjhJ8OH4NPjlw+aTNQ1E*hKfKCAz5bkVtFmkXp94pW806BfeTVS7hPf6ED1lDfodS6U5NJV8LNqSHIFflGLKNL*Pm3DyuCLdii9H4lvKvx32zMvfn+hXdmOOLL8vbuln4iWhYE8XYtl7UUu28aI2dmHjbufr8NlGKOjME0+FjAAiKMWUEMlwWfUyQBgCG7QYFBLE3dkGnQ1g528auF1q7Cc392uWl8RLXhrPb36QFfNLlPS+FEz5+BgNQkTJAlKJwgSkrSWcjSmGMKJj++dcAFOjG3nXru4nDAYgwocwvmiorYfgh6sclDIKyKdimKwKtPyACpvxnGDGGi5j2NDYFJMEFt0i7QEbBNIIZRT8HRASFYMpIg34urVaGPe*6xtB0T9iCAcjf9MAhmAJBFEe8JA4lfixPJ8If9Nu1Lwur6luBGBiA7C1NGonCRFYEXhElQeoT+*jjJ8C+XogYxBkFU6AtoZbKsaY7T1EeeIah8rGqxSr4HOjDGO*MGxyjt5FmKYc5WsHrZbmrMqSdvMbV6x2qulRjoWluq0k6fv6HImAKouV6F1u0rcPXpOkSrpod9spWPfEC2rCooqUC17JzLfyntWsujuFIqNZCspgvOTOKRppkPVGcVEdHnynLFZN1Eua11rtoAELU4gD92uyAbnZar9YSPZFjjX0qB*6tyclF0uDMlIZLVM5Nd2zjFqLYHtNEzfP9QbqI8N4UvjVJcB7NbmmgifYmRIUed8uLdn237NvKZD+eKvzmpl6q*jfC6G3zC9gL+N*SvQPvHcY*Br*U+PGW*Ms+ztYtOdvIw83wKiZ7am6G8HSIc3+Z3KzsUAeVSg4bTZejkwsej78GoMogi0qSgymARUhKHIIBIGXTW9YsovI3zTTVN*X4ffIMUqZ+rsEW54gymFdgOlRGoizxE0l+z3JJWS0gvfQkGJKaN72nO7WqNgyyj60Cav9ZtgIefwNQSwECFAMUAAAICACjk*taJ7wr2FEEAABwBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
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
