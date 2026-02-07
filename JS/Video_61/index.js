let random = Math.random()
console.log(random)
let a = prompt("Enter You First Number Here...");
let c = prompt("Enter the operation");
let b = prompt("Enter You Second Number Here...");

let obj={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}


if(random>0.1){
    //Perfrom Correct Calculation 
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    //Perfrom Wrong Calculation 
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}



