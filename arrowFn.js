let sum = (a,b) => a+b;
sum(2,3); // 5
let double = n => n*2;
double(5); //10
let sayHi = () => alert("Hello");
sayHi();
let age = prompt("Age?");
let welcome = (age > 18 ) ? () => alert('Hello') : () => alert('Greetings');
welcome();
  