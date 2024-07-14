"use strict";
//Generics Chapter
const myFunc = (n) => {
    return n;
};
const ans = myFunc(23);
const ans2 = myFunc("inma");
const ans3 = myFunc(true);
const func = (n) => {
    return n;
};
const person1 = {
    name: "muhammad Inam",
    email: "Inam@gmail.com"
};
const ans1 = func(person1);
console.log(ans1);
//Next Example
const func1 = (n, m) => {
    return { n, m };
};
const ans4 = func1(23, "23");
console.log(ans4);
const array = [
    {
        name: "Muhammad Inam",
        roll: 902
    },
    {
        name: "Muhammad Tahir",
        roll: 908
    },
    {
        name: "Muhammad saad",
        roll: 123,
    },
    {
        name: "Muhammad Inam",
        roll: 234
    }
];
const filterSameName = (arr, property, Value) => {
    return arr.filter(item => item[property] === Value);
};
const filterSameName1 = filterSameName(array, "name", "Muhammad Inam");
console.log(filterSameName1);
