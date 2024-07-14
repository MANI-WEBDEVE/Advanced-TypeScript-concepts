var hungry = true;
var snack = hungry ? "water" : "apple";
// console.log(snack)
// let month: string = "februray"
// switch (month){
//     case "january":
//         console.log(`this month ${month} my father Born `)
//         break;
//     case "februray":
//         console.log(`this month ${month} my sister Born`)
//         break
//     default:
//         console.log("i don`t care why born this month")
// }
//conditional statements
// let player1: string = "paper";
// let player2: string = "scissor";
// if(player1 === player2){
//     console.log("match is tie")
// }
// else if ((player1 === "Rock" && player2 === "scissor") || (player1 === "scissor" && player2 === "paper") || (player1 === "paper" && player2 === "Rock")){
//     console.log("player 1 winner")
// }
// else{
//     console.log("player 2 win")
// }
//function example 
// function halfFryEgg(egg: number = 1, ...ingredients: number[]) {
//     console.log(egg)
//     console.log(...ingredients, 9, 9, 89)
// }
// halfFryEgg(1.5, 1, 4, 3)
// let num = function () {
//     let add = 1 + 100
//     console.log(add)
// }
// num()
// (function () {
//     console.log(1 + 7)
// })()
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        console.log(n);
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(7));
