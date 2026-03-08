let a = prompt("Enter Your Number:")
let b = prompt("Enter the second Number:")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError ("Sorry this is not Allowed")
}
let sum = parseInt(a) + parseInt(b) 
console.log("The Sum is :", sum)