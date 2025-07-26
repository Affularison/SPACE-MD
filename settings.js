require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOGW+VpOdyexTwQAAHAHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVmAYRUCM6YhFvKCpeEHRjH0oooLhTVQg44b9voNPT87A72*tWJBmZJ885md9BmmGKVqgBo+8gJ*gGGWqfrMkRGIFx6XmIgC5wIYNgBHoqay7LBptqsbF8WLv6hvcXKtGKtFkd9NMqU4L5kKaJEL2DRxfk5TXGzm8K1mP13tTFzLuTTuanM7SbBYV4q+xE3lk9Vgb6SsrkfjA8aO*g0VaEmODUn+YBShCB8Qo1BsTka*C1NU7T85u7vMsc9s0JF9XnqzG0lK3oz6CUVS7VOavOrDn9GnyavLHtGZfubSIKuXDZhEdswl7hax4ZnORo0Bl7wb3HL8PsBZ9iP0Wu5qKUYdZ8mfdoHbKOGnAD06iqelDBCtqJC8*pfh+mVVhdV*gND6*jjs19DXijaOew8ch6bFnLHs9DWaJcyMlrQ5fkbOwEZ19WBoqlqcqvwA3y4ZXo**C+MlDnWMyqLY+JNa*Dc7ST47utlHXIJmRhFb3Nfs3T6WTR*xr86+48bzQPhhtz6a0UNdPX7m4so0y*W+OldRIDbk7OwmnBDz7hQ1aS36E0Ovvt1JsEtVSLR8OpYHApB9J6Sk7hON3rbHjzD7zOLTcBcSq8KIWQ2tXUKi0qN*pbx6fBdlsJ9+K22WvW1YuttBf41ftzogg1mgtG*KMLCPIxZQQynKVtrCd0AXRvB+QQxJ7sAlUPx7NIug2u*r2esIWWE*hWwIkumPn5nLOph3VvvgyDG30HXZCTzEGUIneBKctIs0aUQh9RMPrzry5IUc1eurXdBL4LPEwoM9MyjzPofoj68RM6Tlam7NCkjto+EAEj7jOMGMOpT1sayxQSJ8A3pAaQUTDyYEzRzwERQS4YMVKin0urZm7L+1ToH+cTXQZdkDz1wG57WgRB5PoC3+cG0mgg*UG*VW1ZmOffUsRAF8TPtL4o9IaS3ONkod*rt4lt*PETYFvPRQzimD6JhGok+epUmyfhYDefK46vqL4CPgf6MMaL+XmH0VpUV7I9QRtYBfopj5F62ZXGtDihvIlU5mraMR9Gg*d*KNKehGDuXzfm+ErEY55a*ma9j4RdxheCeVYzzx6Wg6y8s9MUT6Lk6qjGrM5dm5LYPRmdSxPMChcNmpkk4psX7TMdb9NKbV3UBS66YQf92uw4tH09H*bFsj7hsy3CJBOn+tHZWTdJiGBgGtSmy2I5T5LV5XjQCNZTkaPcxtAcZSMZ1d70LhbTyNuE1RP7KvC90t+9LPtcmfjHqcJPN7VStZ8eRs*NT2Er4H9L9wLeOox7dH+p8eOW*Ms+jvc3cl2jHS75Sggtqh14eLH9xNTDehXbhZMrxD6oU8m7GODx+KsL8hgyLyMJGAGYuiTDLugCkpWtZbXUy37TTFVMbeq*Jo8hZcrnGhxxgiiDSQ5GvCwKfWkoc9wryyBZvoA0aEmY95WkbD3dKHl+YJB9bBVQZqairNY98PgbUEsBAhQDFAAACAgA4Zb5Wk53J7FPBAAAcAcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  
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
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
