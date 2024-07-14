//Class in typescript
//private, public and protected concept in typescript but not javascript
class Player {
    public readonly  id 
    constructor (
        private name: string,
        public mail: string,
        protected password:number

    ){
        this.id = String(Math.floor(Math.random()*100))
    }
//getter and setter function in typescript
get getMyPassword():number{
   return  this.password
}
set getChangePassword(val:string){
         this.mail = val;
    }
}
const victume = new Player("Muhmmad Inam", "inam@gamil.com", 123456)
console.log(victume.mail)//Access public value using name
console.log(victume.getMyPassword)//Access protected and private value using function
victume.getChangePassword="InamKhanInamKhan"
console.log(victume.getChangePassword)//Access protected and private value using function
console.log(victume)
/////////////////////////////////
// Extend method in Typescript
class PlayerCirket extends Player{
    gander:boolean
    constructor(name:string, mail:string, password:number, gander:boolean){
        super(name,mail,password)
        this.gander= gander
    }
    get2Password = ()=>{
        return this.password
    }
}
let victume2 = new PlayerCirket("Muhammad Inam","Jokar@gmail.com",7865675,true)
console.log(victume2)
console.log(victume.id)
console.log(victume2.get2Password())//ya sirf typescript ma error show kara ga lakin javascript ma nahi kuka javascript ma {public, private, protected} nahi ho ta
 