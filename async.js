let i=0;

let a=async ()=>{
  
    return new Promise((res)=>{
        setTimeout(()=>{
            res("shivansh")
        },2000)
})
}
a.then(val=>{
    console.log(val);
})
