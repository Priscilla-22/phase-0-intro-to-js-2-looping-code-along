// Code your solutions in this file

//practice solution
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts); 

//ASSIGNMENT 1
 const names = ["Tom", "Jerry", "Simpsons", "Ricky"];
const eventName = "swimmingGala";

function writeCards(names, eventName){
    const messages = [];
    for(let i = 0; i < names.length; i++){
    const congrats = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    messages.push(congrats);
}
 return messages;
}
const finalMessage = writeCards(names, eventName);
console.log(finalMessage); 

//ASSIGNMENT 2
const number = 20;
function countDown(number) {
  let i = number;
  while (i >= 0) {
    console.log(i);
    i--;
  }
  return number;
}
countDown(number);
