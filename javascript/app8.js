var firstname = 'Luis';
(function(name){

    var greeting='Inside IIFE: Hello';
    console.log(greeting+ ' ' + name);

}(firstname));