//? Example no 1
const collectTenCharacter = (str:string):string=>{
    return str.substring(0,12)
}
//
const longText :string = "This is a long string and we want to collect only ten characters";
const result:string = collectTenCharacter(longText)
console.log(result)

//? Example no 2 
let longstr:string = "This is a long string and we want to collect only ten char"
let shortstr:string = ""

//todo use for loop solve this question
