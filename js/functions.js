
// 1) Первернуть слвоо наоборот, 
// вводим Apple получаем elppA.
// let words = [];
// let totalArray = [];
// const reverseString = function (string) {
//     // return string.split('').reverse().join('');
//     words = string.split(' ');
//      for(const word of words){
//         if(word.length >= 5){
//           totalArray.push(word.split("").reverse().join(""))
//         } else {
//             totalArray.push(word);
//         }
//     } 

//   return totalArray.join(' ');
// } 

// console.log(reverseString("Hey fellow warriors"));





// function addArrays(array1, array2) {
//     let arrayToNumber1 = parseInt(array1.join(''));
//     let arrayToNumber2 = parseInt(array2.join(''));
//     let total = arrayToNumber1 + arrayToNumber2;
//     let numbersArray = [];
//     total = String(total).split('').map(el => {
//         el = Number(el);
//         numbersArray.push(el);
//     });
    
//      return numbersArray;
      
    // // for( el of total ){
    // //     el = Number(el);
    // //     numbersArray.push(el);
    // // }
    // return total;
   
//   }
//  console.log( addArrays([6,7], [6,7]))
//  console.log(addArrays([6,7], [ 1, 3, 4 ]))


// function maskify(cc) {    
//     const array = cc.split('');
//     console.log(array)
//     for (i = 0; i < array.length; i += 1) {
//         if (i < array.length - 4) {
//             array[i] = "#"
//             console.log(array[i])
//         }       
//     }
//     return array.join('');
// }
// console.log(maskify("4556364607935616"))
// console.log(maskify("1"))
// console.log(maskify(prompt("Please,enter a code")))

// function openOrSenior(data){
//    return data.map(([age, handicap]) 
// => (age > 54 && handicap > 7)
//     ? 'Senior'
//     : 'Open');   
// }
// console.log(openOrSenior([[45,12],[55,21]]))

// function letter(word) {
// return word.slice((word.length-1)/2, (word.length/2+1))
// }
// console.log(letter("flip"))
// console.log(letter("flipoty"))

// function areYouPlayingBanjo(name) {
    
//     if (name.slice(0, 1).toLowerCase() === "r") {
//         name = name.slice(0, 1) + name.slice(1);
//         return `${name} plays banjo`
//     }
//      return `${name} does not plays banjo`
// }

// console.log(areYouPlayingBanjo("Rima"))
// console.log(areYouPlayingBanjo("Adam"))

// function DNAtoRNA(dna) {
    
//     return dna.replaceAll('T', 'U');
// }
// console.log(DNAtoRNA("AACTCCATGTCGAGCCTCCC"))

// function sumArray(array) {
//     let total = 0;
//      let biggestNumber = array[0];
//     let smallestNumber = array[0];
//     if (array && array.length > 3) {
//     for (const number of array) {
//         // number <= control ? smallestNumber = number : biggestNumber = number;
//         // total += number;   
//         if (number <= smallestNumber) {
//             smallestNumber = number 
//         }
//         if (number >= biggestNumber) {
//             biggestNumber = number
//         }
        
//          total += number;
//     }
//     return total -= smallestNumber + biggestNumber;
//         console.log(smallestNumber);
//         console.log(biggestNumber);
//         console.log(total)
//     }

//     return total;
// }

// console.log( sumArray(null))
// console.log( sumArray([ ]) )
// console.log( sumArray([ 3 ]) )
// console.log( sumArray([ 3, 5 ]) )
// console.log( sumArray([ 6, 2, 1, 8, 10 ])  )
// console.log( sumArray([ 0, 1, 6, 10, 10 ]));
// console.log( sumArray([ -6, -20, -1, -10, -12 ]))
// console.log( sumArray([ -6, 20, -1, 10, -12 ])  )