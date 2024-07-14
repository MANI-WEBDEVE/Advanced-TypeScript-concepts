//Generics Chapter
const myFunc = <T>(n:T):T=>{
    return n 
}
const ans = myFunc(23)
const ans2 = myFunc("inma")
const ans3 = myFunc(true)
// next example
type Person ={
    name:string,
    email:string
}
const func = <G> (n:G):G => {
    return n
}
const person1:Person={
    name:"muhammad Inam",
    email:"Inam@gmail.com"
}
const ans1 = func<Person>(person1)
console.log(ans1)
//Next Example
const func1 = <U, L>(n:U, m:L): {n:U, m:L} =>{
    return {n,m}
}
const ans4 = func1<number,string>(23, "23")
console.log(ans4)
// Next example
type person2 ={
    name:string,
    roll:number
}
const array:person2[] = [
    {
        name:"Muhammad Inam"   ,
        roll:902
    },
    {
        name:"Muhammad Tahir",
        roll:908
    },
    {
        name:"Muhammad saad",
        roll:123,
    },
    {
        name:"Muhammad Inam",
        roll:234
    }
]
const filterSameName = <T, Key extends keyof T > (arr: T[], property: Key, Value: T[Key]):T[]=>{
   return  arr.filter(item=>item[property] === Value)
} 
const filterSameName1 = filterSameName(array, "name", "Muhammad Inam")
console.log(filterSameName1)