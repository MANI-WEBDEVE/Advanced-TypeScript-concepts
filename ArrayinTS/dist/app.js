"use strict";
// arry basic method in typescript
//array number define basic method
let arr = [12, 12, 12];
//array string define basic method
let arr2 = ["muhammad", "Inam", "Tahir"];
//array number and string define other method
let arr3 = [12, 12, 1212, 121, 12];
let arr4 = new Array(29);
//now apply loop in array
arr.forEach((i) => {
  i; //ya sirf huma number ka method bataye ga
});
arr2.forEach((i) => {
  i; //or string array sirf string method bataye ga
});
//typescript ma tuple hota ha lakin javascript ma nahi hota
let arr5 = [89, 12, 12, "inma"];
console.log(typeof arr5);
