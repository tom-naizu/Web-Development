console.log("Welcome to Loop Statement:")

let a = 1;
// console.log(a + 1)
// console.log(a + 2)
// console.log(a + 3)
// console.log(a + 4)

for (let i = 0; i < 100; i++) {
    console.log(a + i)
}

let obj={
    name:"Tom Naizu",
    roll:"Programmer",
    Company:"NativeTom"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}

for (const c of "Tom Naizu") {
    console.log(c)
}

let i = 0;
while (i<6) {
    console.log(i)
    i++;
}

do {
    console.log(i)
    i++; 
} while (i<=10);

