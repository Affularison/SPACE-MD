require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJ2V+1o4y0WVUQQAAHEHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGEEQxIiOWEBEvIIoohv7UEKBpdysKhCc8N83sKen52F3tpenIsnIOnnynOQ7yHJM0Rw1YPQdFARXkKH2yJoCgRHQyihCBHRBCBkEI9CfdabhhXny*pG51sBtpsVqrZPDQ3Oa4RbNZAq3dUStI8e9gWcXFOUpwcFvCkKf3Tu2CemJSeZgEgjJPJtFYnFeO*x1v8yaJZvud1qPccM38GwrQkxwFhvFGaWIwGSOGhti8jX4SFPy*lU*W2wss0MeDWKRf6T5OlCEBeH82rKN3npj7bhU*Bp8birdLqtyofb6Q+irWT1xzordQVIgRdlFOyz6CplIB8XB6jt8iuMMhVaIMoZZ82XeOxO9X1C5kg73zU3xhiYJD*7S6HieQEhH5R65y4gVWIud8zXgmaAt1FO9D*dpM13ZRszvJ1ncpHW9NLx1KVTX+57X*bK67H4FbpMPrVz*D+9zW1hv+fteqrTlxKH0fh9G8tZSFqHMb4IF0xfLSJQ4yZzkX4NvngkWLuW9tpvoJO4ORz6arLR15Y9nnC7fYsdM3FiLN7IrfsKHrCS*Q+lmpmy4D1xGiw1*OV1mi7VojE*nmffYK8mAxydhKeNInDw2M3vQ6Mq48BLTnl9gT5GCcR1Ok6IaJrHb8VbWzmXumizP97dXR1fUWCEY8c8uICjGlBHIcJ69YgrfBTCsXBQQxF70gnpqiLkydc1dFQ9yfOyhPEZlylmdLT9xRc9myOiPjaOuB2+gCwqSB4hSFE4xZTlplohSGCMKRn*+1QUZqtn74NrrBL4LIkwo22VlkeQw*Jjqx0cYBHmZMbfJAr09IAJG3GcYMYazmLY8lhkkwRlXSD9DRsEogglFPztEBIVgxEiJfrpWz8OW+Pl+tu+PBx7ogvQ1EBy2u0UQBpwo8CI3lEaK8Af9dm*LwqL4liEGuiB5pYkDoa9Icp+TBbEvtolt*PkTYFsvRAzihIIR0BdIv0qxbsz9LA0c01SNWNVjFXw29KGMd+bNDqP1QJ*L*hit4P288IoE6UentI2bh4rmqrPQsraFch2+*UMRMAKOMZh7w*mqw21lVK7zpn8TZbfaso6viUOYUbHc3FOmNJ1eqJWUqIvbqUof5e4ydJNjQlME14JmTPbXlTaZi4pPBW3cyqgLQlThAP16Wa30*HQ5WzsmNUM4sAzYI9QkfZNTdMHerpRt7ZnSsvJOtqCmdpmxw3rWEL12FDXJivOBx74j6zcXNbNTjfg5Ww3i+F2zL88kP3YVfqmpHVX7GmH0sn4G2wH+9+jegbcK457dX2r8WCb*YkhtU5HTEjm45O*CZU8tl4dHP053i0s9T*xbUKjEd3VDio42eD7*6oIigSzKSdr+WbKQ5DgEXUDyspWslUX5by7T1Z1l*Og8gZSpnzbY4hRRBtMCjHh5IEgiP1Sk9yyb5MUU0nNLgimqadlqulGLwmWQfbgKqO0zX8rg+TdQSwECFAMUAAAICACdlftaOMtFlVEEAABxBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
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
