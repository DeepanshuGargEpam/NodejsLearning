const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();

// Define the CORS options
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000'], // Whitelist the domains you want to allow
    methods:'GET POST PUT',
    allowedHeaders:['Content-Type','Authorization'],
};

app.use(cors(corsOptions)); // Use the cors middleware with your options

// Your route handlers and other middleware go here

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});