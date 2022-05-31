function sayHiLater() {
    var greeting = 'hi!';

    setTimeout(function () {
        
        console.log(greeting);
    
    }, 3000);

}
sayHiLater();