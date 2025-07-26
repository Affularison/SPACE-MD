require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAIyO+lqzN0TSUgQAAG8HAAAKAAAAY3JlZHMuanNvbpVU2Y6jSBD8l3q1NcYcxrbU0gK+sY05fK7moYACF7eL4vLI*77Cnu6elXZne3kqskqZkZER+QMkKc6Rihow*gEygktIUXukTYbAGMiF5yECusCFFIIxMJXGtjz7Ik*ssjz3DFZK97JcKyg8WqvMjNxzsl+I2Yyy1Rt4dEFW2BF2fpPQtpfrizafDMqw01uHks6YHXrc3pvdiclvm62*8jtnxSyt6fkNPNqMEBOc+NPsimJEYKSiZgcx+Rp8RdGIdjMXlbBHRzKyL*FQn2+dabE+L8rAVqJVNTk5otwc*K*BV1yn781nk7DM1wVLTDFau4anRPJpdeQ7Mje3mCLf9BTVqF7wc+wnyF26KKGYNl*mfTAjmnkZjnrScJmM6mrIT+fT3KYcUi03DNh9XTHyYLW6c*rXgGfrnVTPajbKziZisoM8h9zEhjpfYfFeNkvVjrVsL9mjaPMr8B1510r4f3iHyqxWwktwj8uZ1VfXuTa3acDqfXIM7cGwQKW8c8QqOIVfhF*Pey6rjLzTbrXFNdxaihwXZ3YlWnGw8I1+GSW1F1gd4aR*woe0IL9D2Q88p8Mxu+veXF7Ua+gq7FaU1H3I3IxynZ9oQZiVlDVcxMsrmd97ku7eFtL6pGO85IZUPilBvdj7Ura5W3O6JvuzONHfnh2FqFm6YNx*dAFBPs4pgRSnSRsTuwC6pYkcguiTXODbHYlfYtXAyXB4uDV50FsEMorCqcQwWjO0kvjIHgRXUZdvoAsykjooz5G7wDlNSbNBeQ59lIPxn9+7IEE1fY2tLcb1u8DDJKf7pMiiFLrvM32*hI6TFgk1m8RR2gMiYMx8hhGlOPHzlsUigcS54hIpV0hzMPZglKOP*hBBLhhTUqAPzyqp29JubMzLZbE7gS6In+PALhgDluMETmCFESOI4*7oj*xb1aaFWfYtQRR0QfR8NmKHgwHLCcOByAlM+7CNPz4AtvlcRCGO8tae60BhRvpkumlItNHnc2njS4ovgc+G3nXxYn6aDoRmgJnRAhnFJjgFqZod7uVRsZxE1mZzf57ej1x8Okr82z8kAWOgT8SDWk2S3RXqk9GFWv6MX7OBu9vcgjwcJEKTenF0XfJ3rE0byPIdfx*NrjnsQb7M7hAmmjGyqiqr0yCvq2PtcalUvbXVXFRiB*2t2CHV1YtpzhZbEfqyp*KZ4V*kcFDw5bQ0+mXMXTZwhgiZzhYFmd2u*O1kEs60Cp1q2mYlKZa4EBj7vJuOqpPJIKFWpJdin46Jfm4q*FRTO6r218PoafwEtgP879G9gLcKYx7dX3L8XCX*YkfZULXCKVK6M7jQDpZ9fqDcDo7Y90NuVVlXI5Vvmz4Vor6vgcfjexdkEaReSuJ24yQuSbELuoCkRSvZZeKlv1vk0nI59V+dRzCn0qcNLByjnMI4A+O+KHCCwHLc8PVqR9JsAfNrS8Kcl+Ki1XQjZZlJIX13FZDabxYa4PEXUEsBAhQDFAAACAgAjI76WrM3RNJSBAAAbwcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233535259057',
  
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
