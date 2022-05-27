function greet(whattosay) {

    return function(name) {
        console.log(whattosay + '' + name);
    }
}

greet('Hi ')('Luis');