const express=require('express');
const app=express();

const users=[
    {id:1,userName:'admin',role:'admin'},
    {id:2,userName:'user1',role:'user'},
    {id:3,userName:'user2',role:'user'},
]

app.use(function(req,res,next){
    req.user=users.find(user=>{
        user.userName==='admin'
        next();
    })
})

function authorize(role){
    return function(req,res,next){
        let userresult=users.find(user=>{
            user.userName==='admin'
        })
        const user=req.user;
        if(!user||user.role!==role){
            return res.status(403).send('Unauthorized');
        }
        next();
    }
}

app.get('/admin',authorize('admin'),function(req,res){
    res.send("Admin dashboard")
})

app.get('/profile',authorize('user'),function(req,res){
    res.send("User Profile");
})



app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})