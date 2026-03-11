let obj = {
    a : 1,
    b : "Tom Naizu",
}

console.log(obj)

let animal ={
    eats : true
};

let rabbit ={
    jump : true
};

rabbit.__proto__= animal;  //sets rabbit.[[Prototype]] = animal


class Animal{
    constructor(name){
        this.name = name
        console.log("Object is Created...")
    }

    eats(){
        console.log("Kha Raha hoon")
    }

    jumps(){
        console.log("kood raaha hoon")
    }
}

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion...")
    }
    eats(){
        super.eats()
        console.log("kha Raha hoon Roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new lion("Shera");
console.log(l)
