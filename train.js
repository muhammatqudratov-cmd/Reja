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



//B - TASK :

function countDigits(str) {
    return str.split("")
    .reduce((count, char) => {
        if (!isNaN(char)) {
            return count + 1;
        }
        return count;
    },0);
}

console.log(countDigits("ad2a54y79wet0sfgb9"));