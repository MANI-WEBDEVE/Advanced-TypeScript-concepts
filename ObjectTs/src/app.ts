//---- Objects Method ----- //
const obj : {//first Method
    height: number,
    weight : number,
    gender?: boolean
} = {
    height: 77.7,
    weight: 120,
    // gender: true
}
//---- Second Method --//
type Obj = { //Type {Obj} are the use multiple time other Employess
    name : string,
    age : number,
    enginner: boolean
}
const obj1:Obj = {
    name:"MuhammadInam",
    age:18,
    enginner: true
}
// --- {TYPE syntex use in top} but second syntex {interface} ---//
interface Obj1 {
    name : string,
    workerCode : Number,
    age: number,
    oldestWorker?: boolean
}
const worker1:Obj1 = {
    name : "rashied",
    workerCode: 129,
    age:23,
    oldestWorker:false
}
const worker2:Obj1 = {
    name : "Muhammad sahbir",
    workerCode: 1290,
    age:43,
    oldestWorker:true
}
// Ab savale ata ha ka {Tyep} or {Interface} ma sa kiya istamal kare 
// Good practice ha ka {interface} istamal karye
//because this is extends property
//this example understand this method
type funcType = (sall: number, pro: number) => void;
interface NewObj1 extends Obj1 {
    enginner?: boolean;
    divideFunc:funcType
}
//Simple example ka huma employee ka bounes and salary divide karne ha ka total kitne ha
const newWorker: NewObj1 = {
    name : "inam",
    workerCode:1212,
    age : 20,
    enginner: true,
    divideFunc: (n , m) => {// syntex ka kafiee zaada khayal rakhena ha 
     console.log(n * m)
    }
}
newWorker?.divideFunc(2000 , 30)