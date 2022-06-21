class Dog {
    constructor(name){
        this.name = name;
    }
}

const animalfunctionality = {
    walk: () => console.log("Walking!"),
    slepp: () => console.log("Sleeping")
};

const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log ("Wagging my tail"), 
    play: () => console.log ("Playing!"),
    walk () {
        super.walk();
    },
    sleep() {
        super.sleep();
    }
};

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog ("Daisy")

pet1.name; //Daisy
pet1.bark(); //Woof!
pet1.play(); //Playing!