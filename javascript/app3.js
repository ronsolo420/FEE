var a = 3;
var b;

b = a;

a = 2;

console.log(a);
console.log(b);

//by reference (all objects (including functions))
var c = {greeting: 'hi' };
var d;

d = c;
c.greeting = 'Bye'; //mutate

console.log(c);
console.log(d);