let name = "Rahim";       // string
let age = 22;             // number
let isStudent = true;     // boolean
let fruits = ["apple", "banana", "mango"]; // array
let person = { name: "Ali", age: 20 };     // object

console.log(name, age, isStudent, fruits, person);


let a = 10;
let b = 3;

console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Modulus:", a % b);


let marks = 85;

if (marks >= 80) {
    console.log("Grade: A+");
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: Fail");
}


// For loop
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// While loop
let j = 1;
while (j <= 5) {
    console.log("While Number:", j);
    j++;
}

// For...of loop
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}


function greet(name) {
    console.log("Hello", name);
}

greet("Rahim"); // Hello Rahim


let numbers = [10, 20, 30, 40];

numbers.push(50); // add
numbers.pop();    // remove last
console.log(numbers);

numbers.forEach(n => console.log("Number:", n));


let student = {
    name: "Karim",
    age: 20,
    grade: "A"
};

console.log(student.name); // Karim
student.grade = "A+";
console.log(student);


<h1 id="title">Hello</h1>
<button id="btn">Click Me</button>



let title = document.getElementById("title");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    title.innerText = "Text Changed!";
});



alert("Welcome to JavaScript!");


<p id="output">Result will show here</p>
<script>
  let sum = 5 + 10;
  document.getElementById("output").innerText = "Sum is: " + sum;
</script>
