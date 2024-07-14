"use strict";
const Person2 = {
    //ya in type ko needed kar data ha jin ko hum zarrori nahi banata
    name: "inam",
    gmail: "isdjasdhjk@gmail.com"
};
const player = {
    // ya type ko readonly ba data ha or hum un ko change nahi kar sakta
    name: "baber",
    skill: "bollar"
};
const users = {
    Muhammmad: { age: 63 },
    Ali: { age: 60 },
    Inam: { age: 10 },
    Khan: { age: 87 }
};
const orderDetail = {
    //pass arguments 
    user: "Muhammad Inam",
    //city:"Karachi",
    houseNo: 33 / 111
};
// ya property null or undefined ko represented nahi kartaie ha
//--------------------------------------------------------
// Parameter<Type>===>(10);
const myFunc = (a, b) => {
    console.log(a + b);
};
//-----------------------------------------------------------
//Constructor parameter ===>(11);
class student {
    constructor(roll, name) {
        this.roll = roll;
        this.name = name;
    }
}
//-----------------------------------------------------------
//ReturnType <Type>===>(12);
const function1 = (a, b) => {
    return a + b;
};
//----------------------------------------------------------
// InstanceType <Type>
class Employee {
    constructor(name, card) {
        this.name = name;
        this.card = card;
    }
}
const Emp1 = {
    name: "Muhammad Inam",
    card: 12012
};
//------------------------------------------------------------
