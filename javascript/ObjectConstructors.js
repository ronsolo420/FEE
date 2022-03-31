function Person(name, eyeColor, age) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function() {
        return ++this.age;

    };
}

let person01 = new Person("Daniel", "Blue", 27);
let person02 = new Person("Luis", "Hazel", 32);

console.log(person01.name);