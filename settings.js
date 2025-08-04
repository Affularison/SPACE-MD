require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADZeBFvA72nwVAQAAHEHAAAKAAAAY3JlZHMuanNvbpVU0ZKiOBT9l7xqTYuAqFVdtYi2IoqggsrWPkQIEIUASRBhyn*fwp6enofd2V6ews2te88959x8ByTDDBmoBuPvIKf4Bjlqj7zOERiDSRmGiIIuCCCHYAwOy+3bUrKuTD6hutJcTpHvq44XHX1zdo*KMjVuc*tl6R*UV*Dogrw8J9j*TcFe*82rr5FNxM5ElpdTeRd66fRl75*ccosbKzT1m+4q+bZZv4JHWxFiikk0y2OUIgoTA9UWxPRr8NNNIxb+qWhkOFjIJrc3hMcva7eObudmPnRVu8y2286xN6++Bn+pkTd5wA6TdHfaTZxRrcVNXNXpqg9X*ahMVFdZ4Oh2MXbZO3yGI4ICPUCEY15*mXdpXrGpaVKidsr5RaHSORkZa7*Z2ou1YknLOnBmju8rpWB*Dfj2LG8WRKnV6yx2HO1446cd6kwGnIQFOUx6nZuazmQ7SCr9V+AW*fDK9f*wXk5zfvXc5TUn8iE+nVS9tIoquiyPw97ENjuGh87hfrU3DvrX4FtnPnwRPRnvdksinK0ls*T1qCSy4+KaiJCTi2HG0z0R15*wIS*p71Bu*E2iXXQ2vKFMrARrm5tGM43u07wzO23Su2b2t6S0Op3dZb8hcWx4K1pERaC9KcflrPFcxTK0l1VyTU0SK8KWlxc2VV+fE11RrQdgLDy6gKIIM04hxxlpY32x1wUwuO2QTxF*0gvS7Vm4ztOX2BWv06Iwl4O0cZpF4wpF7jGcu9JKlkulCN3ZK+iCnGY+YgwFC8x4Rus1YgxGiIHxn391AUF3*i5c204UuiDElHGHlHmSweBD1Y9L6PtZSfiuJr7WHhAF495nGHGOScRaHksCqR*jG9JiyBkYhzBh6OeEiKIAjDkt0c+t1bKgJX60dtfuZDEHXZA+BcEBGIO+KMo9SRSk3nAw7gt*sG9VWxbm+TeCOOiC5JkmyWJ*NFD6PUWU+lKb2MYfPwG29QLEIU4YGANtPdeug0ibrethxez5XD1Fqhap4HOgD2e8Mz*vcHaXNUM5TpEJq3jl5gnSPLu0ZoWL8vqq8UDX9*noOnz9hyJgDNgbNYdCXSSe7bjmQjsoWmCbqeW9xcpp9HLIi36+aWbYvuz3p2FnIN22qBQkMpKd2TBJU6qeVrvK430jwpJ4X1KpqSfRa9stQDfso1+b7WEwYMdjZ3CrkoOhW5VEjqlWhWokauW6iaTAIdyH+xAnGwElakaLUeM5w72rKna6TkNPVoLU3p+CvT0vyGDkrAP1h2efO5P8eKvw002tVO1viNFz9QlsBfxv6d6Btw7rPbq*1PjxmPzLQk62N3peIxuXQiVeDkzfCdA7RqmzutyN5Fj4uUqPO202CD0LPB5*dUGeQB5mNAVjAElAMxyALqBZ2VpWJ2H2m2aa6uiz6H3yBDKufq7BHqeIcZjmYCwosiT2hsJQeM+yaJYvIItbEuaSmpatp2s1z3cc8o+tAurzg3Pw+BtQSwECFAMUAAAICAA2XgRbwO9p8FQEAABxBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB8BAAAAAA=',
  
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
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 100,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
