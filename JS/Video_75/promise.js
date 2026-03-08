console.log("This is Promises");

let prom1 = new Promise((resolve , rejact ) =>{
    let a = Math.random()
    if(a<0.5){
        rejact("No random Number was not supporting you...!!!")
    }

    else{
        setTimeout(() => {
            console.log("Inside the SetTimeOut...")
            resolve("Promises resloved Yet...!!!")
        }, 3000);
    }
})
    
prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})