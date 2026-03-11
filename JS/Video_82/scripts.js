async function sleep(){
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            console.log("Hyeee")
            reslove(455)
        }, 1000);
    })
}
    function sum(a,b,c){
        return a+b+c
    }


// let a = await sleep()
// let b = await sleep()

(async function main(){
    // let a = await sleep()
    // let b = await sleep()
    // console.log(a)
    // console.log(b)

    // let [x, y,...rest] = [1, 5, 54, 85, 65, 25, 35, 12]
    // console.log(x,y,rest)
    
    let obj = {
        a:1,
        b:2,
        c:3,
        d:4
    }
    
    let {a,b} = obj;
    console.log(a,b)

    let arr = [1,5,6]
    console.log(arr[0] + arr[1] + arr[2])
    console.log(sum(arr[0] ,arr[1] ,arr[2]))
    console.log(sum(...arr))
})()