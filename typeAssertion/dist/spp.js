"use strict";
// //Type Assertion
// /*=>*/let btn = document.getElementById("btn") as HTMLElement;
// btn.onclick 
// /*=>*/let btn1 = <HTMLElement>document.getElementById("btn");
// btn1
// /*=>*/let btn2 =document.getElementById("btn")! ;
// btn2.onclick
let form = document.getElementById("myForm");
let input = document.querySelector("#myInput");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = String(input.value);
    console.log(value);
    console.log(typeof value);
    const p = value + Math.floor(Math.random() * 10);
    console.log(p);
    const h1 = document.createElement("h1");
    h1.textContent = p;
    const body = document.querySelector("body");
    body.append(h1);
};
