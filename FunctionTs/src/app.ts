// --- function in Typescript --- //
type FunctionType = (n:number, m:number , l?:number) => void
//Optional Parameter
const func:FunctionType = (n, m, l) => {
//condition write
if(typeof l === "undefined"){
    return n * m / 10;
}
    return n * m * l
}
console.log(func(25,25))
//---- Default Parameter ----//
type FunctionType1 = (n:number, m:number , l?:number) => number
const func1:FunctionType1 = (n, m, l = 20) => {
   return n * m / l
}
console.log (func1(10, 10))

//function in Array && rest parameter
type funType =  (...m:number[]) => number[];
const func2:funType = (...m) => {
    return m
}
func2(12,45,76,89,45,45,45,)
//function with object
interface productType {name:string, price:number, value:boolean}

type getDataType = (product:productType) => void;

const func3:getDataType = (product) =>{
    console.log(product)
    // return product
    // console.log(productOne)
}
//now make a product
const productOne = {
    name:"Macbook",
    price:900000,
    value:true
}
console.log(func3(productOne))
//never type
const errorTheError = ()=>{
    throw new Error();
} 
type themeMode = "dark" | "light"
const theme:themeMode = "dark"