// arry basic method in typescript
//array number define basic method
let arr:number[] = [12,12,12]
//array string define basic method
let arr2:string[]= ["muhammad", "Inam", "Tahir"]
//array number and string define other method
let arr3:Array<number> = [12,12,1212,121,12]
let arr4:Array<number|String> = new Array(29)
//now apply loop in array
arr.forEach(i => {
    i//ya sirf huma number ka method bataye ga
     
});
arr2.forEach(i => {
    i//or string array sirf string method bataye ga
});
//typescript ma tuple hota ha lakin javascript ma nahi hota
let arr5:[number,number,number,string] = [89, 12, 12,"inma"]
console.log(typeof(arr5))
//------other method defined type in arrays
const arrays:Array<string> = []
const NewArray:Array<string> = new Array (20)
let NewArray1:Array<number> = new Array (20)
let NewArray2:Array<boolean> = new Array (20)
// --- two arguments in one array --- //
let twice:Array<string|number> = ["inam", 1000]