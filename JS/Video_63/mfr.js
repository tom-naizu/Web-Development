let arr  = [12,13,15,6,30];

// let Newarr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     Newarr.push(element**2)
// }

let Newarr = arr.map((e)=>{
    return e**2
})
console.log(Newarr)

const Greaterthenseven = (e) =>{
    if(e>7){
        return true
    }
    return false
}
console.log(Newarr.filter(Greaterthenseven))    

let arr2 = [1,2,3,4,5,6];
let red = (a,b) =>{
    return a+b
    return a-b
    return a*b
}
console.log(arr2.reduce(red))

Array.from("Tom_naizu")