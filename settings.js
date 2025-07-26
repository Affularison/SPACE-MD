require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOqO+lpkzGw*UAQAAGwHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGOWiIhEdsQgqeEVUQDf2oYQCSm7VVSWIE*77Bt3T0*OwO9vLU5GVkXny5Dn1HRQlZmiJGqB+B4TiCnLUHnlDEFDB5BZFiIIuCCGHQAWaptTxrlMmHcdrxBvahzkUr4Yz16NruI9IfF1wqW8+JG*6Ap5dQG6XDAe*KWgXDvUmZ0UMCL7Du5fzhPVH5049iw*BRMiaubt9RJm0SuMX8GwrQkxxEU9JgnJEYbZEjQ0x*Rr8zion+LEaB651b6T0HlFh2AxLNvGmnctZn7mVNzy*GtSffxH+ayeGWnPVfBi4xNYFpzyfFyfJUbAn68V6eaw6o*uqZDt8eofPcFyg0ApRwTFvvsx7MEv9Q31c0RXP836e9OL6Jgtms4qSdC4E*Bqn8rn2eswtvwacE8MZ+FNZpIfdigWpLS+d5PjoRfhRwzxM1rwao21tbePgV+A2*dBK+n9470+M3WgUzRviW5456kiGp9wvZeK4DHK*Qowc9c1JmShi*UXZdIwVO8tHn2*t8Tx1k4EY3uwRnLu6Pxz03ENj75duihfm8RM+5Df6O5SmoWjD9LjStGJs+GjmSgvfJGHuDAcZV5hH6SXuXY*HMIz7lTvrHQoSe*vjTGqCzuQC3bVn7jLTj0xrmsOzWBnxVcf1y9tEKWqsEKjCswsoijHjFHJcFm1MHEhdAMNqjwKK+Bu9AF+2j5T1E+V6PZnTnmkZMGOdZXaaCka8ZJsNkc*iURg6svICuoDQMkCModDEjJe0WSPGYIwYUP*8qwsKdOfvi2vbSUIXRJgyfixuJCth+LHVj0sYBOWt4PumCPT2gChQ+59hxDkuYtbyeCsgDRJcIT2BnAE1ghlDPydEFIVA5fSGfrpWL8OW+NNK8lzhIIAuyN8WgkOgAlGSRFkUB4ogjtTxH+xb3VaFhHwrEAddkL1ljcYjWR4PxqOxIPTbvDb8*AmvrRYiDnHGgAp02*ZKnm6m1p5n6918rk1jTY818DnOhy7eeR9j69Wcbsa67Z*86hRdYm8XLftBIBluJiKHLDJrnMkpibWXfygCVCCtOtfGkvsCNPqPcn9+9LZTqxPWhjsYyo0zyQ4Knr4+ynKumJ4dO3rJa9j3JbdYhc388bqOdkQWDwuarIvisl8fBpkTay9ttxBVOEC*NlskQSWKnlgJc6ka6mK1ci9EuQflazlIsQ+DXTzl4kkpQj25Pu64mKP6inl4mVwMQ77QhRdNtKO0sZvo0YvvYxJ3CN69K*bNMdmPlwq*aaldVPsbYfRm*AK26*vPxb3jbuXVf3Z*KfHjJfkXN06iE14mdyPaXQVxNhJNUZ6lZsNNc1ML57BI4f68t89osTxp4Pn8qwtIBnlU0rz1D0nKAoEuoOWtlatVROVveuna0TJ+zJ1BxrVPCxxwjhiHOQGqMBpIg4E4EMbvWTYtiQlZAlRQ5NLk0sq50QjZc8g*DAW09tv6IXj+DVBLAQIUAxQAAAgIAOqO+lpkzGw*UAQAAGwHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233553450663',
  
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
