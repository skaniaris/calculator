// variables 

let first = 0; 
let second = 0; 
let operator = "";
let button = ""; 

let display = document.querySelector("div.display");
display.innerHTML = "";
let clear = document.getElementById("clear");
let num = document.getElementsByClassName("num")

// functions

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2; 
}

function multiply(num1, num2) {
    return num1 * num2; 
}

function divide(num1, num2) {
    return num1 / num2; 
}

function operate(num1, num2, operator) {
    if (operator == '+') {
        return add(parseFloat(num1), parseFloat(num2)); 
    } else if (operator == '-') {
        return subtract(parseFloat(num1), parseFloat(num2));
    } else if (operator == '*') {
        return multiply(parseFloat(num1), parseFloat(num2));
    } else if (operator == '/') {
        return divide(parseFloat(num1), parseFloat(num2));
    }
}

function populateDisplay() {
    if (button == "clear") {
    display.innerHTML = "";
    operator = "";
    first = 0; 
    second = "";
    } else if (button == plus || button == minus || button == divi || button == multi) {
        if (operator == "" && !(display.innerHTML=="")) {
        operator = button.innerHTML;
        first = display.innerHTML;
        display.innerHTML += " " + operator + " ";
    } else if (!(operator == "")) {
        display.innerHTML = round(operate(first, second, operator));
        first = display.innerHTML;
        second = 0; 
        operator = button.innerHTML;
        display.innerHTML = first + " " + operator + " ";
        }
    } else if (button == equals) {
        if (second == 0 && operator == "/") {
        alert("cannot operate");
        display.innerHTML = ""
        first = 0; 
        second = 0;
        operator = "";
    }  else if (operator == "") {
        display.innerHTML = "";
        first = 0;
        second = 0; 
    } else {
        display.innerHTML = round(operate(first, second, operator));
        first = display.innerHTML;
    }
    if (first == display.innerHTML){
    operator = "";
    second = "";   
    }
    button = ""; 
}
button = ""; 
}

function round(number) {
    return Math.round(number * 1000) / 1000; 
}

// number buttons

for (let i =0; i < num.length; i++) {
    num[i].addEventListener("click", () => {
        if (operator == "") {
            first = display.innerHTML += num[i].innerHTML;
        } else if (!(operator == "")) {
            display.innerHTML += num[i].innerHTML;
            second += num[i].innerHTML;
        }
        if (display.innerHTML.length > 20 ) {
            display.innerHTML = "";
        }
        
    });
}

// clear button 

clear.onclick = function(){
    button = "clear"; 
    populateDisplay(); 
}

//plus button 

let plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
    button = plus; 
    populateDisplay();
});

// minus button 

let minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
    button = minus; 
    populateDisplay(); 
});

// multiply button 

let multi = document.querySelector(".multiply");
multi.addEventListener("click", () => {
    button = multi; 
    populateDisplay(); 
});

// divide button 

let divi = document.querySelector(".divide");
divi.addEventListener("click", () => {
    button = divi; 
    populateDisplay(); 
});

//equals button 

let equals = document.getElementById("equal");

equals.addEventListener("click", () => {
    button = equals; 
    populateDisplay(); 
    // if (second == 0 && operator == "/") {
    //     alert("cannot operate");
    //     display.innerHTML = ""
    //     first = 0; 
    //     second = 0;
    //     operator = "";
    // }  else if (operator == "") {
    //     display.innerHTML = "";
    //     first = 0;
    //     second = 0; 
    // } else {
    //     display.innerHTML = round(operate(first, second, operator));
    //     first = display.innerHTML;
    // if (first == display.innerHTML){
    // operator = "";
    // second = "";   
    // }
    // }
});
    
