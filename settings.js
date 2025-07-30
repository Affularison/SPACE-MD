require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAA2a*FpSUovxTgQAAG4HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBj9L3nVGrkKWtVVg4hoC4oXbGFrHyKEEOVmCAhO+d+3sKdn+mF3qpenkKS+75zznZMfIMtJiZaoBeMfoKCkhgx1S9YWCIzBpIoiREEfhJBBMAbG65z5Sbm0Eis4yPcQKjs08nfcXNJ6cmzwYrt00f2VawX8Ah59UFSnhAR*KBg3omOvVDib5ZWEiUD4QyKWA+xNY7uRXL5xLVlUfDwQNy*g0VWEhJIMG0WMUkRhskStAwn9Gvye43p4OzhHq1m9ipbnxbKpytWJb+*CbXWCVd7bWiG*rfXZ5Wvwc081MHd9C9XX69t+n6yhbPvIZUl2m7m8d62VYv1myTe+Md7hlwRnKFyEKGOEtV*W3TPv8QS78lYwqC9S203FuYejOvBfT3tmRskanwYDuaJm*jXg5M1qFveebb7KB*tmrpZQUVd+LWu6H29EW9h7iqVgdzLUvM*AHfrhlcv*0V2ygsnG0sW29ZSwMB33mAb3dGZMtoFj5MvNMN2o4ZbjE*6L8A9k5K*N4cEb9PjBwK6n25GwsU8nxRHSxY5RNk2hEfPXZPYJPmQV*RNKbHh7yyEttHQJ57B9Ox7D0TJojlcci*KIbOV2WFZ1cWPQQ+42MZNFLdZJedkjGyXGa2MtJd8IJyOszootyk7qUcC3lyejC2oXIRjzjz6gCJOSUchInj33uFEfwLDeoYAi9pQXCAI6SHhIq7jRrGg2YL11ZNzFaBTeR*XMHGxu9iUdOUM8MV5AHxQ0D1BZonBOSpbT1kZlCTEqwfivv*sgQw17H1zXTuT7ICK0ZG5WFUkOw4+pfhzCIMirjO3aLNC7BaJgzP3eRoyRDJedjlUGaRCTGukxZCUYRzAp0S+GiKIQjBmt0K*U6nnYCS+btqVJqg36IH0OhIQdZ1GUOUnkJU4djoXv5bdbVxUWxbcMMdAHyfOWJIvCaKgInCJKgjQWvnfbj1*wumohYpAkJRgD3SL6ZYh1Y7HzM3VjmpqBNR1r4DedD1+86272WNnI+lI5TtEK3mLrUCRI9zeVY1wPqGgvOgsXi30xuqgv*1KkY8E3nBYGvMivDdPnuVa*q4S*3flVkUgzZe6rYhCO+Kl1wlSUev5E4fD2FucWUpwy2d7oJEGb+8WbVP56rZp7kejutDNRH4SoJgH63OxwrxaTnCvlYk0ajirrnTesCgXxvC1n+v4S5pk9x9vDRj1IOJi7nBOm57Mn9xRJvr7ax2rtts1sd5568YyHeHm4TBbxT8c+E5P8fKnI00vdoLrfiKBn8DOYoi8M7h13Zy*u0f9U4udL8h9pnGxrerLRhlT8TTy*lYsdD*0jTl3r3CyT4zUoNHrc6cYw8h3wePzdB0UCWZTTFIwBzEKakxD0Ac2rzq+LLMr*0EzX3IWB34knsGTa7wzsSYpKBtMCjHlFFhWR41Xx*ZZD82IOy7jTwJS0tOoM3WpFsWOQfUQKaN23tBXw+AdQSwECFAMUAAAICAANmvxaUlKL8U4EAABuBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB2BAAAAAA=',
  
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
