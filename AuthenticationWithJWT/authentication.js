const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
const secretKey='secret_Key';

const users=[
    {id:1,userName:'admin',password:'admin123',role:'admin'},
    {id:2,userName:'user1',password:'user123',role:'user'},
    {id:3,userName:'user2',password:'user2123',role:'user'},
]

function authenticateUser(req,res,next){
    const{userName,password}=req.body;
    const user=users.find(u=>u.userName===userName&&u.password===password);
    if(!user){
        return res.status(401).json({message:'Invalid username or password'})
    }
    req.user=user;
    next();
}

function generateToken(req,res,next){
    const user=req.user;
    const token=jwt.sign({userId:user.id,username:user.userName},secretKey,{expiresIn:'1h'})
    req.token=token;
    next();
}

app.post('/login',authenticateUser,generateToken,(req,res)=>{
    res.json({token:req.token});
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})