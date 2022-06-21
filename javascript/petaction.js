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

Object.assign(dogFunctionality, animalfunctionality);
Object.assign(Dog.prototype, dogFunctionality);