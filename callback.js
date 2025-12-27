
//Callback function

// console.log("Almukhammed maslahatlari");
// const list = [
//   "Ilm o'rgan — ilm ibodatdir, Ota-onaga itoat qil — baraka shunda", // 0-20
//   "Halol kasb tanla, niyatni tog'ri qil va namozni mustahkam tut - hayot tartibga tushadi", //20-30
//   "Mas'uliyatni his qil, oila va burchingni unutma, Halollikdan og'ma", //30-40
//   "Sabr va shukrni ko'paytir, Yoshlarga yo'L ko'rsat - savobi davom etadi", // 40-50
//   "Tavbani ko'paytir - qalbni ppokla va oxiratga tayorlan dunyo o'tkinchi", //50-60
//   "Oilang bilan vaqt o'tkaz" // 60 
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//             callback(null, list[5]);
//     }, 5000);
//   } 
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data ) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed her 1");



//Async function 

console.log("Almukhammed maslahatlari");
const list = [
  "Ilm o'rgan — ilm ibodatdir, Ota-onaga itoat qil — baraka shunda", // 0-20
  "Halol kasb tanla, niyatni tog'ri qil va namozni mustahkam tut - hayot tartibga tushadi", //20-30
  "Mas'uliyatni his qil, oila va burchingni unutma, Halollikdan og'ma", //30-40
  "Sabr va shukrni ko'paytir, Yoshlarga yo'L ko'rsat - savobi davom etadi", // 40-50
  "Tavbani ko'paytir - qalbni ppokla va oxiratga tayorlan dunyo o'tkinchi", //50-60
  "Oilang bilan vaqt o'tkaz" // 60 
];

async function maslahatBering(a,) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise(( resolve, reject) => {
        setInterval(() => {
         resolve(list[5]);
        }, 5000); 
    });
  } 
}

//     setTimeout(function () {      
//     }, 5000);

// Call via then / catch  
// console.log("passed here 0"); 
// maslahatBering(25)
// .then((data)=> {
//     console.log("Javob:", data);
// })
//     .catch ((err) => {
//         console.log("ERROR:", err);
//     });
//     console.log("passed here 1");


// Call via async / await 
async function run () {
    let javob = await maslahatBering(25);
        console.log(javob);
        javob = await maslahatBering(70);
        console.log(javob);
         javob = await maslahatBering(44);
        console.log(javob);
}
run();