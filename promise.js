let a= new Promise((res,rej)=>{
    rej('hii')
})
console.log(a);
a.then(val=>{
    console.log(a)
}).catch(err=>{
    console.log(err);
})