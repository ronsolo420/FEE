var arr = [
    1, 
    false, 
    {
        name: 'Luis',
        address: '111 Main Street.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    }, 
    "hello"
]; 

console.log(arr);
arr[3](arr[2].name)