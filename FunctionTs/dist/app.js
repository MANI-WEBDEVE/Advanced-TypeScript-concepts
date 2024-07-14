"use strict";
//Optional Parameter
const func = (n, m, l) => {
    //condition write
    if (typeof l === "undefined") {
        return n * m / 10;
    }
    return n * m * l;
};
console.log(func(25, 25));
const func1 = (n, m, l = 20) => {
    return n * m / l;
};
console.log(func1(10, 10));
const func2 = (...m) => {
    return m;
};
func2(12, 45, 76, 89, 45, 45, 45);
const func3 = (product) => {
    console.log(product);
    // return product
    // console.log(productOne)
};
//now make a product
const productOne = {
    name: "Macbook",
    price: 900000,
    value: true
};
console.log(func3(productOne));
//never type
const errorTheError = () => {
    throw new Error();
};
const theme = "dark";
