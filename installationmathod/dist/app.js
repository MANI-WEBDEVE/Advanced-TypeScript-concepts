"use strict";
console.log("hello");
//define the type in variable {number, String, Boolean , any}
//String define process
let b = "Muhammad Inam";
console.log(typeof (b), b);
// b = 45345 <========{this is type String not a number}
b = "muhammad Tahir"; //<====== {this is right way of typescript code}
console.log(typeof (b), b);
//Number definr process
let a = 2323;
console.log(typeof (a), a);
// a = "hjasd" <====={this type Errror}
a = 233; //<==== {this right way of code in typecsript}
console.log(typeof (a), a);
//define Boolean process
let c = false;
// c = "inam", 9090 <==== {this type boolean and not again define string and number}
console.log(typeof (c), c);
//-----------
//simple function how to define Typescript
const func = (a, b) => {
    console.log(a, b);
    return a * b;
};
console.log(func(2, 2));
