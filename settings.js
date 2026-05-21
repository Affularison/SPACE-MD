require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAF2PtVy1VybcIwUAADYKAAAKAAAAY3JlZHMuanNvbq2Vy27jyBWG36W2EkYsXkRSgIEpFS+6URfrYllBFiWySJV5VbEoiRp4lSyyCdDIKos08op+hICy3d3AzDQcwAIIkEXxnO**q845v4EsZyUd0xr0fgMFZyciaHMr6oKCHuhXYUg5aIOACAJ6YIk664xOQvtp2UGSgRN0XWqZnnQQGflPrjVIRFSvEFqupTvw3AZFtU+Y*5OAo1RhVv3ILOsyXTmDaVfhNFPwKsGJFyT7jlKybWihaXewuAPPTUTCOMsiuzjQlHKSjGk9J4x*DH9oM*lpd55U+f5hNljvamNh6ApjR2as12Ndg*AauJoXjNfex*DvXUKvkwdsx*uoCBM0W+23iSbO4dyb6pjOpaA4jSz8hFD8il+yKKPBMKCZYKL+sO*eBJMowfeF+zSLWmKhILi5Ilm6hJfJaLRPKzhX046cKdvhx8AderC5cNOi1an1IL0qlgGLwRleTD2abpWOri6U0Bs79wz9CD7n72cl*n98r93uiruX0RD1takfSKPrwI1nXrYzrwPjSCV*QTLXmNTEKT+Grxwn+TjEm+ujmUu+Qdc77m1yqh7ipUQGON3Q*dDLo*14mX*HJ6LiP6N0B7hLRrHDCvlowmKwu4gWrR94vV2Z8ik9YrYI+zYhxJnMH5LZOnNRdTl0wnxpzmursrG6imRDeerw+85sLk6ruabhxd1NUUzrYQB68LkNOI1YKTgRLM9ua9BsAxKcltTnVNzsBVZ1dNz9pJRXifAMg0az*jHVL2xTMT*XZyfHkFZZXGnTUr0DbVDw3KdlSYMBK0XOa4+WJYloCXp*ue1UI5rTNBd0xALQA7KiyFIXaqamqr+Wv5wPRJSkKH7JqABtEPI89SjohSQpaRvcvkDY0aHkKIYmqRBpso6MbhfplqpZGCo2aiAIF8xnBckE6AHQaAo4LUuWRV4eNIYXWWNF+gq3YiktBUkL0IO6biq6CRX1uf1pvJLU7TqSJTl91US6o8qS4fShDW2s2pL8ObzaJ*Iqlo4cW4KGahqKpFqqavaxDRFScR87n8Pb*URe3e4iQ0OmpGNJNbCpaoZhWn1Dkhwo48*h1Z**2gYZvYjXvtNUiwGVNggZL8U6q4okJ8F7V*r2lvh+XmViWWc+bm4oBz34fZkKwbKobDyoMsL9AztR3Ch+U*itRCmnAegJXtFvYwe*gk82qgc3lgka+ibQ71zswd*7mNz+BSWtqypmVzVVQzOlHvy1WW+DjDShwMvXL397+frl7y9fv*zz7frHy9cv*3r577**07j1pqJJGlBBWFKCHsDz7UNNVNeezLenKXJdZEcIR01Vvqt+73+v*QUSlmh8t32cGR60FNNbZevzzo6E*7gKrpBLIkud2cK4SMO7PwjSiMXBhg1jrfWIqiMqnc3BNMYtbzGeyzjEbhgnre25n6yH53tvtxebaNxZZP2O*jRl9focrkXqxNEjfaDBPvZJpEDNg+h812QL6In59Mdk8VV9PAwWIoZ2sT3uvP3qyONsL2YtqHVnui3OkXSAxfQ6217Uy3gbyTu1ezi3tlud61x4w4nl0KMdW8dpkszZtqWNdih67cy3yZC8TWT21jPZ7TFk9Dbg3rbmz3bulbc5ftJz+4dP3ybln0ybfvCQF5TIG9k6WdOF2VnZGvTc++Fk69qKbxJzstMOq3juBRg8N4VQJESEOU9BD5As4PktOc+r5jgPszD*STKMvCGKolEjOCGlQN9L5I*qTmqDtEZFsRREvJcWQLdfNQDP*wNQSwECFAMUAAAICABdj7VctVcm3CMFAAA2CgAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAABLBQAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233206159544',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 8080,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Affularison',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12342605,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || 'xxxxxx',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || '25-12-2026'
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
