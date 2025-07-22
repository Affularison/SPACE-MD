require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIANoz9lpNjOxBUwQAAG4HAAAKAAAAY3JlZHMuanNvbpVUXY+iSBT9L*WqGQEBkaSTRQQEBEXxg97sQwEFFvLVRaHixP++wZ6enmyys708Fbdubp177jn3Oygr3CAbdUD+DmqCL5Ci*ki7GgEZzNokQQQMQQwpBDLQXD+Sgnngio7il*d4Ot0Ego0qz*RHaXYUx95to+9PaWUwL+AxBHUb5jj6TcEgXW4mqT6aoht7NSaNm5aJjVeFv1+EWXp4o8785krijt9EL+DRV4SY4DLV6hMqEIG5jbo1xORr8KXFOcynnJXdNW6hLnarVTO*kquFD1S3bcbQgyODXFwsF*zX4KvHemmF146ojmSv13iwzNvM1q1dds506pnZ*bp3LZUTtfQdfoPTEsVmjEqKafdl3rd6gNpBNpOOr+n6oLpXs2C6Qg+vdmoXPNLbeaARutw4hfM14G3NZDc0mvviZHfZ8dNDWrkZ3ht5sZhZywU970NGuo2E8K78CnxNPrRy*j+8H+bwoFxYZVQJeMoFN2bmqlXmpuOpW4xOAyP0yXndDK73Y*Q1+OnSEkSB814hYV1vPVmopjS*L1V6sDWx47WBMxnEV7Ri7s0nfEhb8juU+LpK1+tNZDiMEYSVZ+7WfFd1e7JdOZ0w3sCIL7EmDAbpzTs6roK8bjc+JoLLuQw3GezugdHM26z02dfKeiUDg*GRkr48OzqjzoyBzD6GgKAUN5RAiquyj4ncEMD4skURQfTJLuAufO1d6trxNGmaCGd2E9h1qga3N+pZp0NZip0SLnlpcKpewBDUpIpQ06B4gRtakc5BTQNT1AD5z7+GoEQ3+j63*rUxOwQJJg3dlW2dVzD+GOrHJYyiqi3ptisjtT8gAmTmM4woxWXa9DS2JSTRCV+QeoK0AXIC8wb9bBARFAOZkhb9NK1axT3vtiWykjQ1wBAUz3ngGMhgykrMRGAEVpxKMvdH8+3aV4V1*a1EFAxB*sxieV6YMuJEYnhJYvrEPv74ia8vFyMKcd709rRUgu1gpllJOnIcw1C0VFFTBXz286GLd+J1CWpJ6Jhm7J28CbwW+8voRtOoqA6DmTKe5ElSCFKDA+9J*D+LABns9QmHIGoDm2lZT6+JZvqtX+uHUGyZsm3VLJtKkqmwkbcVmISOK4*hlp7txIzOa1Jab3f86iAJmu*jKD9t8TmyniIaghhdcIR+feyeYHZmk4RvOmk7OmA9DOacPvEtqagz9BoXr3Aj7I3rmxrigdoa29tbFXe6tms2u6MWE8n3dLVWhCxPRrFoScZWonPlXbFPx+Q*NhV+iqmfVP+bYPQ0fgn7+f3n5N5x9*piHsNfSvzYJP*ixtkmMU4L7q6qi525W3GNlYcjKQwW1pt+ST13IBzHQpsszUKzwePx1xDUOaRJRQogA1jGpMIxGAJStb1gzTKpfrfHZ6ap*mg8hw1VPk3g4wI1FBY1kNmJMGZFQRKY96w1qeoFbE5ABvzrZi1ue0V3Sl1vKaQfngJK*7nNCDz+BlBLAQIUAxQAAAgIANoz9lpNjOxBUwQAAG4HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '918075051698',
  
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
