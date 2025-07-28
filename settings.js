require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFya*Fp6DI7UUgQAAG4HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGkFQG6q6aiAiooIoaKNb8xAhYpBrCCJO+d+30Omeftid7eUpJKlzvvNd8hOkGSnxHDdA*glySi6I4XbJmhwDGajV8Ygp6IIAMQRkcDa9*Qtzrdsm8ssw6cPTjKcwOynmQhy5DhzPgmI*q8lWqF*BvQvy6hAT*w8Fl8J2W*Q3nWXHkcje4S8naXM+XM3kkm1VYRbfYHjQSj6SFOUV3NuKiFCShlp+wgmmKJ7jxkaEfg3+crzc72ovSa2CJ6e+mh0FmnPKoFNYYV5bzUKc7LGTD0Ve*Br84+22P1q00rgltxxQj0hm5HLuztLr4CU3tszGUXmI1hrHPeGXJExxYAQ4ZYQ1X+Y9tFQYG0jPdvORabhYjZKs6U8W8KQci2uUbkKt4fg5b*D+14BXBLNQdYVkdvAOpslzVLtJ9lYcTCsvdQWUCgvVnfSiLKw*A7fpu1fO*4f3+Xy+zvoh83tv3MKCvOvuy+KqhcVs7WpGhsd02tua7myofZH3uqMY+8YZmLF7mOnJ2K9VAcXFkh+eJwVMlVtP7RkNiffwE++IVfRPKHu8n5XcoTfS7bE6nfLGeQdFy87y5dp0GCZzJDW31TWqTKmzPDlhwA4XBi0HFtOZiWF1jadnOByb3ttMGjjmZrGyK7h6fUx0xo0RAJm*dwHFISkZRYxk6WNPErsABRcH+xSzB71gcr463gIt8vXNMe233kbaFMJF4qpbpBGuIyZQVUZhLIwO3CvogpxmPi5LHExJyTLamLgsUYhLIP*1owtSfGVP4dp2At8FR0JLtkmrPM5Q8K7q+yHy*axKmdOkPmwXmAKZ+72NGSNpWLY8Vimi*olcMDwhVgL5iOISf0yIKQ6AzGiFP1ILs6AlfqfYor5d6KALkocgJAAy6AvCgBMFXuRehrLwvfxWt1VRnn9LMQNdED9uiQOhLw1HfW4kiH1RFr632*cPeG21ADNE4hLIAC4IPA9DqM0KlL6sdF0xQgWGCvg9zrsvnrzrHVZeB3A+8sbYQvVpsc1jDPerytaKLc6bM2SBYbi5dH55*YciQAbrlejxb2PHUq+LeGeX8xNBR+E0H*u3qN67jev6662UpDitJ53YNg3pcO11qltfkYaTuC6Gyo2dL2c20XvcvgzjcDfQ1Pq17RbgC*Hx52b2ZTmdCkI9iGK3PK8HSS+K*MML15sMufjqXTz9chCpM9ThVO9ZCt5cY912YnFR2VVOsvl4rLji26Cp7aluCUUw26o5rJ+OfSQm*vVSkYeXWqHa3yPBj+CnqJXvP4V74m7txd27n0r8ekn+JY3q+kIPJl6Riq+F6K00HB7tvTDZLKLrPPYKP1eo50BteNzb4H7*0QV5jNgxowmQAUoDmpEAdAHNqtavRnrM*tAMKhtDC5+Dx6hkyu8MuCTBJUNJDmR+NBBGAicI4vOWTbN8ispTy4EuKknVGrpR8txhiL1HCijtNzdH4P43UEsBAhQDFAAACAgAXJr8WnoMjtRSBAAAbgcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
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
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 100,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
