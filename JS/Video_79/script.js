let a = prompt("Enter Your Number:")
let b = prompt("Enter the second Number:")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not Allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){
    let x= 1;
    try {
        console.log("The Sum is :", sum*X)
        return true
    } catch (error) {
        console.log("Error Agya Tom Naizu")
        return false 
    }
    finally{
            console.log("File Connection is Being closed and DB connection is being   closed")
    }
}
let c = main()
