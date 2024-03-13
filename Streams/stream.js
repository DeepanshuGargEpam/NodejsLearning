const express= require('express');
const fs=require('fs');
const app=express();
const PORT=8000;

const readableStream= fs.createReadStream('input.txt');

const writeableStream=fs.createWriteStream('output.txt');

readableStream.pipe(writeableStream);

readableStream.on('data',(chunk)=>{
    console.log(`Recieved ${chunk.length} data`);
})

readableStream.on('end',()=>{
    console.log('Finished reading the file');
})

writeableStream.on('finish',()=>{
    console.log("Data has been written to the file");
})

writeableStream.on('error',(err)=>{
    console.error("Error writing to the file",err);
})

app.listen(PORT,()=>{
    console.log(`Server started at localhost ${PORT}`)
})