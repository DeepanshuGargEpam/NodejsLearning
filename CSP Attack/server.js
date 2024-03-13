const express = require('express'); 
const helmet = require('helmet'); 
const app = express(); 

//with library  
app.use(helmet()); 

//without library
app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    );
    next();
  });
  
app.get('/', (req, res) => { 
    res.send("This is the Demo page for"
        + " setting up express server !") 
}); 
  
app.listen(3000, (err) => { 
    if (err) { console.log(err); } 
    else { console.log("Server started" 
        + "at http://localhost:3000");
     } 
}); 