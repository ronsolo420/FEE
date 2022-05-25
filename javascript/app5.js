function greet(firstname,lastname,language){
    
    language = language || 'en';
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('-----------');
}
greet();
greet('John');
greet('John','Doe');
greet('John','Doe','es');