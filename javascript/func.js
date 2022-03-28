let a = 10;
console.log(a);

function greet(name,greettext="GOOD MORNING FROM JS")
{
    console.log(greettext+" "+name);
}

greet("apoorva");
greet("apoorva","Good morning");

function sum(a,b,c){
    var d = a+b+c;
    return d;
}

let s = sum(1,2,3);
console.log(s);