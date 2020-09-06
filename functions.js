"use strict";

function showMessage() {
    console.log("Hello, world!");
}

showMessage();

function funcWithArgs(a, b) {
    console.log(typeof(a), a);
    console.log(typeof(b), b);
}

funcWithArgs('abc', 123);
var num = 10;
console.log('num = ', num);

function changeNum(text) {
    console.log(text);
    num = 20;
}

changeNum("text");
console.log('num = ', num);

function returningFunc(text) {
    text += ", world!";
    return text;
}

console.log(returningFunc("Hello"));

let lettingFunc = function (){
    console.log("I was made as let!");
};

lettingFunc();

const func = (text) => console.log(text + "\nArrowFunc!");