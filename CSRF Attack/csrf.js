const express=require('express');
const csrf=require('csurf');
const cookieParser=require('cookie-parser');

const app=express();
app.use(cookieParser());
app.use(csrf({cookie:true}));

app.get('/',(req,res)=>{
    console.log(req,req.csrfToken())
    res.cookie('XSRF-TOKEN',req.csrfToken());
    res.send('CSRF token generated');
})

app.post('/transfer',(req,res)=>{
    console.log(req)
    if(req.body._csrf!==req.cookies['XSRF-TOKEN']){
        res.status(200).send('Invalid CSRF token');
    }
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
