const express = require('express');

const app=express();
const PORT=3000;

app.get('/success',(req,res)=>{
    res.status(200).send('Sucess')
})

app.get('/not-found',(req,res)=>{
    res.status(404).send('Resources not found')
})
app.get('/error',(req,res)=>{
    res.status(500).send('Internal Server Error')
})
app.get('/unauthorized',(req,res)=>{
    res.status(401).send('Unauthorized')
})
app.get('/forbidden',(req,res)=>{
    res.status(403).send('Forbidden')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
