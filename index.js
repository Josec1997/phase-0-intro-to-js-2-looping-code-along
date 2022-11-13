// // Code your solutions in this file
// // for (let age = 30; age < 40; age++) {
// //     console.log(`I'm ${age} years old. Happy birthday to me!`);
// //     debugger;
// //   }

// //   const gifts = ["teddy bear", "drone", "doll"];


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//   console.log(`Wrapped ${gift} and added a bow!`);
// }  


// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);



function writeCards(arrayOfNames, event) {
    const shoppingCart = []
     for (let i = 0; i < arrayOfNames.length; i++) {
         shoppingCart.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`)
         debugger
     }
     
     return shoppingCart
      }
 
 
 
 function countDown(startingNumber){
 while(startingNumber >= 0) {
 console.log(startingNumber--)
 }
 }
 