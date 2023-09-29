// // alert("hello")

// console.log("Hello world");
// console.log(123);
// console.log(true);
// var greeting = "hello";
// console.log(greeting);
// console.log([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log({ a: 1, b: 2 });
// console.table({ a: 1, b: 2, c: 4 });
// console.error;

// // Variables and decorations

// var greeting;
// console.log(greeting);

// let val;

// val = String(5);
// val = String(4 + 4);
// val = String(true);
// val = String(new Date());

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// // turing string to numbers

// val = parseFloat(10);

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// Numbers

// const num1 = 100;
// const num2 = 50;
// let val;

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Objects

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.4);
// val = Math.sqrt(49);
// val = Math.abs(-67.7);
// val = Math.pow(6, 2);
// val = Math.min(2, 33, 4, 5, 6, 7, -2);
// val = Math.max(2, 33, 4, 5, 6, 7, -2);
// val = Math.ceil(Math.random() * 10);

// console.log(val);

// Strings

// const firstName = "William";
// const lastName = "John";
// age = 35;

// let val;

// val = firstName + lastName;

// val = firstName + " " + lastName;

// val = "Eli";
// val += " Gamor";

// val = "Hello, my name is " + firstName + " and I am " + age;
// val = val.length;

// val = firstName.toUpperCase();
// val firstName.indexOf("o")

// val = str.replace('Brad',"Jack")

// console.log(val);

// Template Literals

// const name = "John";
// const age = 30;
// const job = "web developer";
// const city = "Miami";

// // Without template strings

// html = "<ul><li>Name : " + name + " </li> <li>age : " + age + " </li></ul>";

// // with Template strings

// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>age: ${age}</li>
//         <li>job: ${job}</li>
//         <li>Name: ${city}</li>

// `

// document.body.innerHTML = html;

// Arrays

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const fruit = ["Apple", "Banana", "orange", "pear"];
// const mixed = [22, "hello", true, under];

// let val;

// val = numbers.length;

// console.log(val);
// console.log(numbers);

// if (condition){
//     take action
// }
// else{
//     take action
// }

id = 101;

// if (id == 100) {
//   console.log("correct");
// } else {
//   console.log("Incorrect");
// }

// if (id) {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log("No ID");
// }

// let color = "Yellow";

// if ((color = "red")) {
//   console.log(`color is ${color}`);
// } else {
//   console.log("incorrect");
// }

// Ternary

// console.log(id===100 ? 'correct' : "incorrect")

// function greet() {
//   console.log("Hello");
// }

// greet();

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i == 2) {
    console.log("here we are ");
  }
}

while (i < 10) {
  console.log("Number" + i);
  i++;
}

const cars = ["ford", "chevy", "honda", "toyota"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
