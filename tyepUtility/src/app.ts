//Type Utility
//Partial <Type>===> 1
type User ={
    name:string,
    email:String,
}
type User2 = Partial<User> 
//ya in type ko ? da kar un unrespected kar daata ha
//----------------
//Type Require<Type>====> (2) =! opposite of partial
type Person = {
    name? : string,
    gmail?:string
}
const Person2 : Required<Person> = {
    //ya in type ko needed kar data ha jin ko hum zarrori nahi banata
    name:"inam",
    gmail:"isdjasdhjk@gmail.com"
}
//------------------------------------
//readOnly<Type>====>(3)
type Player = {
    name:string,
    skill: string
}
const player: Readonly<Player> = {
    // ya type ko readonly ba data ha or hum un ko change nahi kar sakta
    name:"baber",
    skill:"bollar"
}
//----------------------------------------------------
// player.name = "shahmir"
//record<type>==>(4)
interface UserInfo {
    age: number;
}
//Is tarah se, Person type kisi record ki specific properties ko define karte hue, sath hi alag alag object mein ho sakne wali aur bhi properties ko bhi accept karta hai. Yeh especially dynamic data structure wale scenarios mein bahut useful hota hai.
type UserName = "Muhammmad"|"Ali"|"Inam"|"Khan";
const users: Record<UserName, UserInfo> ={
    Muhammmad:{ age: 63},
    Ali: {age:60},
    Inam:{age: 10},
    Khan:{age:87}
}
//----------------------------------------------------
// Pick<Type, key> ====>(5)
interface OrderInfo{
   readonly id:string,
    user:string,
    city:string,
    houseNo:number
     
}
//ya type ma sa un ko pick kar lata ha jo ap bolta ha is ko jasa city or id ma na nahi bola tu likhe bhi nahi sakta ma
type ShippingOrder = Pick<OrderInfo,"houseNo"|"user">
const orderDetail:ShippingOrder ={
    //pass arguments 
    user:"Muhammad Inam",
    //city:"Karachi",
    houseNo: 33/111 
}
//----------------------------------------------------
// Omit<Type, key> ===>(6);
interface paymentInfo{
    readonly id:string,
    Account:string
    AccountNo:number
    Rs:number
}
// ya on pick ka opposite ha us ma woh un property ko select kar raha tha jo hum bol raha tha is ma un property ko drop down kar raha ha jo hum bol raha ha
type payInfo = Omit<paymentInfo, "Rs">
//----------------------------------------------------
//Exclude<Type, ExcludeUnion>===>(7);
type Myunion = string|number|boolean
type NotNeedBoolean = Exclude<Myunion, boolean>
//ya property koi type ko khatam kar na ka liya hote ha jasa hum na boolean ko mainuse kar diya
//--------------------------------------------------------
// Extract <Type, Union>===>(8);
type Myunion1 = string|number|boolean
type NeedBoolean1 = Extract<Myunion, boolean>
// ya property Myunoin type ma sa boolean ko la gi sirf
//--------------------------------------------------------
//NonNullable<Type>===>(9);
type Myunion2 = string|number|undefined|null|boolean
type Random = NonNullable<Myunion2>
// ya property null or undefined ko represented nahi kartaie ha
//--------------------------------------------------------
// Parameter<Type>===>(10);
const myFunc = (a:number, b:string)=>{
    console.log(a + b)
}
type paraRandom = Parameters<typeof myFunc>
//-----------------------------------------------------------
//Constructor parameter ===>(11);
class student {
    constructor(public roll:number, public name:string){
    }
}
type classRandom = ConstructorParameters<typeof student>
//-----------------------------------------------------------
//ReturnType <Type>===>(12);
const function1 = (a:number, b:string):string =>{
    return a + b
}
type returnFunc = ReturnType<typeof function1>
//----------------------------------------------------------
// InstanceType <Type>
class Employee{
    constructor(public name:string, public card:number){

    }
}
type EmployeeInstance = InstanceType<typeof Employee>
const Emp1:EmployeeInstance ={
    name:"Muhammad Inam",
    card:12012
}
//------------------------------------------------------------