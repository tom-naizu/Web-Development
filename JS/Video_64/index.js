// Adjectives:{
//     Crazy 
//     Amazing
//     Fire 
// }

// Shop_Name:{
//     Engine
//     Foods
//     Garments
// }

// Another_Word:{
//     Bros
//     Limited
//     Hub
// }

let first , second , third ;

//Genarted the First Rnadom Word 
// 0 0.33 0.66 1

let ran1 = Math.random();
if(ran1 < 0.33){
    first = "Crazy";
}

else if ( 0.33 <= ran1 && ran1 <0.66 ){
    first = "Amazing"
}

else if( 0.66 <= ran1 && ran1 < 1){
    first = "Fire"
}

//Genarted the Second Rnadom Word 
let ran2 = Math.random();
if(ran2 < 0.33){
    second = "Engine";
}

else if ( 0.33 <= ran2 && ran2 < 0.66 ){
    second = "Foods"
}

else if( 0.66 <= ran2 && ran2 < 1){
    second = "Garments"
}

//Genarted the Third Rnadom Word 
let ran3 = Math.random();
if(ran3 < 0.33){
    third = "Bros";
}

else if ( 0.33 <= ran3 && ran3 < 0.66 ){
    third = "Limited"
}

else if( 0.66 <= ran3 && ran3 < 1){
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)
