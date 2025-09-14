// =================== JS BASICS DEMO ===================

// Variables
let name = "John";
const pi = 3.14;
var age = 20;
console.log("Name:", name, "PI:", pi, "Age:", age);

// Data Types
let fruits = ["apple", "banana"];
let student = { name: "Ali", age: 20 };
console.log("Fruits:", fruits);
console.log("Student:", student);

// Loops
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// =================== DOM & EVENTS DEMO ===================
let title = document.getElementById("title");
title.innerText = "Welcome Students to Simple Shop!";

let colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", function () {
    document.body.style.background = "lightyellow";
});

// =================== PRODUCTS ===================
let products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 300 },
    { id: 3, name: "Headphones", price: 100 }
];

// =================== RENDER PRODUCTS ===================
let productsDiv = document.getElementById("products");

products.forEach(product => {
    let div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <button>Add to Cart</button>
  `;
    div.querySelector("button").addEventListener("click", () => addToCart(product));
    productsDiv.appendChild(div);
});

// =================== CART ===================
let cart = [];

function addToCart(product) {
    let existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    let totalText = document.getElementById("total");
    cartList.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
      ${item.name} x ${item.qty} = $${item.price * item.qty}
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
        cartList.appendChild(li);
        total += item.price * item.qty;
    });

    totalText.innerText = "Total: $" + total;
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    displayCart();
}
