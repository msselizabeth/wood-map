// **Масивы**//
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;
// for (const client of clients) {
//     if (client === clientNameToFind) {
//       message = "Клиент с таким именем есть в базе данных!";
//       break;
//     }
//     message = "Клиента с таким именем нету в базе данных!";
//   }
//   console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 18;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (i = 0; i < numbers.length; i += 1){
    

//     if(numbers[i] % 2 === 0){
//         total += numbers[i];
//     }
// }

// console.log(total);

// const word = 'bottles';
// let count = 11;

// while( count > 0){
//     console.log(`${count} ${word} of beer on the wall`);
//     console.log(`${count} ${word} of beer,`);
//     console.log('Take one down, pass it around');
    
//     count -= 1;
   
//     if(count <= 0){
//         console.log(`No more ${word} of beer on the wall`);
//     } 
// }

// const value = '8 11';
// const value1 = value.split(' ');
// console.log(value1);

// const s = value1[0] * value1[value1.length - 1] ;
// console.log(s);

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// let index = 0;
// for (let i = 0 ; i < fruits.length ; i += 1){
//    index = 1 + i;
//    console.log (`${index}: ${fruits[i]}`);

// }


// const numbers = [2, 17, 94, 1, 23, 37, 112, 8537, 52754,676 , 673, 1234567989];
// let smallestNumber = numbers[0];

// for (const number of numbers){
//     if(number > smallestNumber){
//         smallestNumber = number;
//     }
  
// }
// console.log(smallestNumber);

// const a = {x:6, y:8, z:11};
// const b = {x:5, y:9, z:11};
// const c = {x:5, y:8, z:16, d:4};

// const d = {...a, x:7, ...b, z:14, ...c, d:18, y:6,x:4};
// console.log(d)

// const a = {x:1, y:2, z:3, d:6};
// const b = {x:1, y:4, z:5, d:6};
// const c = {x:7, y:4, z:13, d:6};
// const d = {x:1, y:2, z:3, d:8};

// const e = {x:17, y:24, z:48, d:25,
//      ...a, 
//      z:10, 
//      ...b, 
//      ...c, 
//      d:19, z:7, x:4, 
//      ...d, 
//      y:5}

// console.log(e)

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   let keys = [];
//   let values = [];
//   // Change code below this line
  

//   console.log (keys);



// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// const numbers = [1, 5, 2 , 4, 3];
// const sorted = numbers
// .map(number => number * 3)
// .filter(number => number > 10)
// .sort((currentNumber, nextNumber) => currentNumber - nextNumber);

// console.log(sorted)


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags)

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нет своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };


// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);



// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   student => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

// const numbers = [51,18,13,24,7,85,19];
// let smallestNumber = numbers[0];
// let biggestNumber = numbers[0];

// for ( const number of numbers){
//     if(number < smallestNumber){
//         smallestNumber = number;
//     }

//     if(number > biggestNumber){
//         biggestNumber = number;
//     }
// }

// console.log('Smallest Number:' , smallestNumber);
// console.log('Biggest Number:' , biggestNumber);

// for (const number of numbers) { if(number % 2 === 0){
//     total += number;
// }
// }



































// MOdule 1 JS
// const max = 100;
// const min = 20;

// for ( let i = min; i <= max; i += 1){
  
//   if ( i % 5 === 0){
//  console.log (i)
//   }
// }



// let userInput = Number(prompt('Введите число'));
// if(userInput > 0){
//   console.log('Это положительное число')
// } else if (userInput === 0) {
//   console.log('Это ноль')
// } else if (userInput < 0) {
//   console.log('Это отрицательное число')
// } else {
//   console.log('Это не число')
// }



// const hours = 14;
// const minutes = 26;

// if (minutes === 0){
//   console.log(`${hours} ч.`)
// } else {
//   console.log( `${hours} ч. ${minutes} мин.`)
// }

// const question = prompt('Какое офицальное название JavaScript?')

// if (question === "ECMAScript") {
//   alert('Верно');
// } else {
//   alert('Не верно!')
// }


// let cost;
// let subcrpiption = prompt('How?');
// subcrpiption = subcrpiption.toLowerCase();

// console.log(subcrpiption);

// switch (subcrpiption) {
//     case 'free':
//         cost = 0;
//         break;

//     case 'pro':
//         cost = 100;
//         break;

//     case 'premium':
//             cost = 500;
//             break;

//     default:
//         console.log('Invalid');        
// }

// console.log(cost);

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }

//   const target = 3;
//   let sum = 0;
  
//   for (let i = 0; i <= target; i += 1) {
//     sum += i;
//   }
  
//   console.log('sum:', sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const employees = 7;
// const maxSalary = 5000;
// const minSalary = 500;
// let totalSalary = 0;

// for(i = 1; i <= employees; i+=1 ) {
//   const salary = Math.round (Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`ЗП сотруднка ${i} - ${salary}`)
  
//   totalSalary += salary;
// }

// console.log(`Сумма зарплат = ${totalSalary}`)

