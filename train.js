// // A - TASK :

// function countLetter (letter, word) {
//     let count =0;

//     for ( let i = 0; i < word.length; i++) {
//         if (word [i] === letter ) {
//             count++;
//         }
//     }
//     return count;
// }
 
// console.log(countLetter("e", "engineer"));



// B - TASK :

// function countDigits(str) {
//     return str.split("")
//     .reduce((count, char) => {
//         if (!isNaN(char)) {
//             return count + 1;
//         }
//         return count;
//     },0);
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

// C - TASK

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq(soat, minut) {
//     console.log(
//       `Hurmatli mijoz ayni damda do'konimizda soat ${soat}:${minut}pm da ${this.non} non, ${this.lagmon} lag'mon, va ${this.cola} cola mavjud`
//     );
//   }
//   sotish(nomi, soni) {
//     this[nomi] -= soni;
//   }
//   qabul(nomi, soni) {
//     this[nomi] += soni;
//   }
// }
// const shop = new Shop(4, 5, 2);
// shop.qoldiq(22, 40);
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq(22, 50);

// D - TASK

function checkContent(word1, word2) {
  if (word1.length !== word2.length) {
   return false; 
  }
let arr1 = word1.split("");
let arr2 = word2.split("");
arr1.sort();
arr2.sort();

return arr1.join("") === arr2.join("");
}

checkContent("mitgroup", "gmitgrou");

console.log("hello");