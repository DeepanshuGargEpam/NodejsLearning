setTimeout(()=>console.log("this is timeout 1"),0)
setTimeout(()=>{
    console.log("this is timeout 2")
    process.nextTick(()=>{
        console.log("this is inner next tick inside settimeout");
    })
},0)
setTimeout(()=>console.log("this is timeout 3"),0)

console.log("console log 1");
process.nextTick(()=>console.log("this is process next 1"));
console.log("console log 2");

process.nextTick(()=>console.log("this is process next 2"));

process.nextTick(()=>{
    console.log("this is process next 1")
    process.nextTick(()=>{
        console.log("this is inner next tick inside next tick");
    })
});

process.nextTick(()=>console.log("this is process next 3"));

Promise.resolve().then(()=>console.log("Promise resolve 1"));
Promise.resolve().then(()=>{
    console.log("Promise resolve 2")
    process.nextTick(()=>{
        console.log("this is inner next tick inside promise block");
    })
});

Promise.resolve().then(()=>console.log("Promise resolve 3"));


