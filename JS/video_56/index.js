console.log("hello i am conditional statments ")

let age = 17;
let grace = 2;

if (age = 18) {
    console.log("You can Drive...");
}

else if (age == 0) {
    console.log("Are you kidding??")
}

else if (age == 1) {
    console.log("Are you again kidding??")
}

else {
    console.log("You can not Drive...");
}

//Arthemic Operator
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)

//Assignment Operator
age = grace     //x=y
age += grace    //x=x+y
age -= grace    //x=x-y
age *= grace    //x=x*y
age /= grace    //x=x/y
age %= grace    //x=x%y
age **= grace   //x=x**y

//Comaprision Operator
age == 18
age != 18
age === 18
age !== 18
age > 18
age < 18
age >= 18
age <= 18
// age ? 18

//Logical Operator
// &&  logical and
// ||  logical or
// !  logical not 

a =6;
b =8;
let c =a>b ? (a-b):(b-a)