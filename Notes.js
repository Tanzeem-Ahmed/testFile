// --> null vs undefined
// null is assigned to a variable where as undefined is when a variable is declared without having value
// null datatype is object and undefined datatype is undefined

// --> NaN - property of a global object. example: string - string.

// console.log(NaN === NaN);  false

// --> Leap year or not

// var year = 2002;

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log(`${year} is a leap year`);
//         }else{
//             console.log(`${year} is not a leap year`);
//         }
//     }else{
//         console.log(`${year} is a leap year`);
//     }
// }else{
//     console.log(`${year} is not a leap year`);
// }

// --> Function

// function declaration
// function function_name (parameters){
//     code to be executed.
// }

// functionName(arguments);  //Calling a funtion.

// Function expression

// storing a function in a variable with return value

// var funEx = function(a,b){
//     return a + b;
// }

// var sum = funEx(10,20);

// console.log(sum);

// function bioData(){
//     var firstName = 'Tanzeem';
//     console.log(firstName);

//     if(true){
//         let lastName = 'Ahmed';
//         return firstName + ' ' + lastName;
//     }

// }

// // bioData();
// console.log(bioData());

// ** if there are 2 parameters but we have passed only one argument then it will given NaN

// Arrow function

// const sum = (parameters) => {
//     return a * 10;
// }

// console.log(sum(10));

// const sum = a => a * 10;  if only one line of code

// console.log(sum(10));

// --> Array

// let arr = [1,2,3,4,5,'a'];

// arr.forEach((ele, idx) => console.log(`${idx} - ${ele}`));

// searching and filter in an Array
// const arr = ['a','b','c','d','f'];

// // console.log();

// const idx = arr.indexOf('d');

// if(idx != -1) var newArr = arr.splice(1, 1, 'h');

// console.log(arr);

// const arr = [1,4,9,16,25];

// const newArr = arr.map((ele) => Math.sqrt(ele));

// console.log(newArr);

// const arr2 = arr.map((ele) => ele * 3).filter((ele) => ele > 15).reduce((accu, ele) => {return ele += 5},10);

// console.log(arr2);

// var myName = 'Tanzeem Ahmed';

// console.log(myName.indexOf());

// var substr1 = myName.slice(2,6);
// var substr2 = myName.substring(2, 7);
// console.log(substr2);

//Substring and slice are same but substring cannot take -ve values;

// var myName = 'Tanzeem Ahmed';

// let subStr = myName.substr(7);

// console.log(subStr);

// var arr = [1,2,3];

// var str = JSON.stringify(arr);

// var nrr = JSON.parse(str);

// console.log(str);
// console.log(nrr);

// let date = new Date();

// console.log(date);

// let a = 10;
// let b = 20;
// let c = 30;

// [a, b, c] = [c, b , a];

// console.log(a,b,c);

// let a = 2;
// let b = 20;

// let random = Math.floor(Math.random() * (20 - 2) + 2);

// console.log(random);

// --> Seive of erathosthenes
// const arr = [];

// for(let i = 0; i <= 29; i++){
//     arr[i] = true;
// }

// let count = 0;
// for(let i = 2; i <= 30; i++){
//     if(arr[i] == true) count++;
//     for(let mul = i * 2; mul <= 30; mul = i + mul){
//         arr[mul] = false;
//     }
// }

// console.log(arr);

// for(let i = 1; i <= 30; i++){
//     if(arr[i] == true) console.log(i);
// }

// --> Random Number
// const num = Math.floor(Math.random() * (10 - 1)) + 1;

// console.log(num);

//--> JavaScript Program to Find Sum of Natural Numbers Using Recursion

// function sumNatural(num){
//     if(num > 0) return num + sumNatural(num - 1);
//     else return num;
// }

// const n = 5;

// const totalSum = sumNatural(n);

// console.log(totalSum);

// --> JavaScript Program to Find Factorial of Number Using Recursion

// function fact(num){
//     if(num === 0) return 1;

//     if(num > 0) return num * fact(num - 1);
// }

// const factorial = fact(5);

// console.log(factorial);

// --> JavaScript Program to Convert Decimal to Binary

// const n = 9;

// const res = n.toString(2);

// console.log(res);

// --> JavaScript Program to Find ASCII Value of Character

// let charCode = function(s){
//     return s.charCodeAt(0);
// }

// console.log(charCode('1'));

// --> Funtion as a parameter

// function greet(){
//      console.log('Hello Tanzeem');;
// }

// // function name(name, greet){
// //     let res = greet();

// //     return res + name;
// // }

// // let n = 'Tanzeem';

// // console.log(name(n, greet));

// setTimeout(greet,1000);

// // console.log('This');

// // --> JavaScript Program to Check Whether a String is Palindrome or Not

// // let str = "malayalam";

// // First Approach
// // let res = function(str){
// //     for(let i = 0; i < str.length / 2; i++){
// //         if(str[i] !== str[str.length - 1 - i]) return false;

// //         return true;
// //     }
// // }

// // Second Approach

// // let res = function(str){
// //     return str.split('').reverse().join('');
// // }

// // if(res(str) == str) console.log('Palindrome');
// // else console.log('Not');

// // --> JavaScript Program to Sort Words in Alphabetical Order

// // let str = 'I am learning JavaScript';

// // function wordSort(str){
// //     let res = str.split(' ').sort();
// //     for(let ele of res) console.log(ele);
// // }

// // wordSort(str);

// // function reverseString(str) {

// //     // empty string
// //     let newString = "";
// //     for (let i = str.length - 1; i >= 0; i--) {
// //         newString += str[i];
// //     }
// //     return newString;
// // }

// // // take input from the user
// // const string = 'Tanzeem';

// // const result = reverseString(string);
// // console.log(result);

// // --> Check Occurrence of a Character Using for Loop

// // function countString(str, letter) {
// //     let count = 0;

// //     // looping through the items
// //     for (let i = 0; i < str.length; i++) {

// //         // check if the character is at that position
// //         if (str.charAt(i) == letter) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// // // take input from the user
// // const string = 'Tanzeem';
// // const letterToCheck = 'e';

// // //passing parameters and calling the function
// // const result = countString(string, letterToCheck);

// // displaying the result
// // console.log(result);

// //--> JavaScript Program to Convert the First Letter of a String into UpperCase

// // const str = 'tanzeem';

// // function toUpperFirstChar(str){
// //     return str.charAt(0).toUpperCase() + str.slice(1);
// // }

// // console.log(toUpperFirstChar(str));

// // --> Count the Number of Vowels Using for Loop

// // const vowels = ['a','e','i','o','u'];
// // let str = 'Tanzeem';
// // function countVowels(str){
// //     let count = 0;
// //     for(let chr of str){
// //         if(vowels.includes(chr)) count++;
// //     }
// //     return count;
// // }

// // console.log(countVowels(str));

// // --> JavaScript Program to Replace All Occurrences of a String

// // const str = 'Mr Red has a red house and a red car';

// // const res = str.split('Red').join('Blue');

// // console.log(res);

// // --> JavaScript Program to Generate Random String

// // const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// // function generateStr(length){
// //     let charLen = char.length;
// //     let res = '';

// //     for(let i = 0; i < length; i++){
// //         res += char.charAt(Math.floor(Math.random() * charLen));
// //     }

// //     return res;
// // }

// // console.log(generateStr(5));

// // --------------------------------------        DOM and BOM                  ------------------------------------------

// // --> DOM - Use to manipulate content, style and structure.

// // const logo = document.getElementById('logo');

// // logo.style.color = 'red';

// // console.log(logo);

// // const list = document.getElementsByTagName('li');

// // console.log(list);

// // const list1 = document.querySelector('ul');

// // // for(let idx in list1){
// // //     list1[idx].style.fontSize = '5rem';
// // // }

// // // console.log(list1);

// // const li = document.createElement('li');
// // const text = document.createTextNode('Tanzeem');

// // list1.appendChild(li).append(text);

// // console.log(list1);

// // li.remove();

// // let ul = document.querySelector('ul');

// // console.log(ul.children);
// // console.log(ul.childNodes);

// // let ele = document.getElementById('btn');

// // ele.addEventListener('mouseenter', () => ele.style.background = 'Red');

// // -->  difference b/w addEventListener and onclick -- addeventlistener does not overwrite existing event handlers whereas onclick does.

// // ---> Timing based events - setTimeout(), setInterval(), clearTimeout(), clearInterval().

// // let count = 0;

// // const set = () => {
// //     setInterval(() => {
// //         console.log(count);
// //         count++;
// //     }, 1000);
// // }

// // console.log(set);

// // ----------------------       Advance JS -----------------------

// // --> Array Destructuring - 

// // const arr = [1,4,9,16,25];

// // let [n1, n2, n3, n4, n5] = arr;

// // console.log(n2);  Same with Object



// // let res = (num) => {
// //     if(num == 1 || num == 2) return true;

// //     for(let i = 2; i * i <= num; i++){
// //         if(num % i === 0) return false;
// //     }

// //     return true;
// // }

// // for(let i = 0; i <= 30; i++){
// //     if(res(i)){
// //         console.log(i);
// //     }
// // }


// // let arr = [1,2,3,4,5,6,7,8,9];

// // let left = 0, right = arr.length - 1;

// // for(let i = 0; i < arr.length / 2; i++){
// //     let temp = arr[left];
// //     arr[left] = arr[right];
// //     arr[right] = temp;
// //     left++; right--;
// // }

// // console.log(arr);


// // function kid(print){
// //     print();
// // }


// // kid(function (){
// //     console.log("Tanzeem");
// // })

// // print();

// // let person = {
// //     name : 'Tanzeem',
// //     no : 20 ,
// //     age : 22
// // }

// // delete person.no;

// // console.log(person);


// // let arr = [1,2,3,4,5,6,76,7,8,9,4];

// // let filteredArr = arr.filter((ele) => {
// //     return ele > 5;
// // });

// // console.log(filteredArr);

// let product = [
//     {
//         brand : 'Apple',
//         pname : 'Iphone 12 pro',
//         price : 100000
//     },
//     {
//         brand : 'Apple',
//         pname : 'Iphone 13 pro',
//         price : 130000
//     },
//     {
//         brand : 'Samsung',
//         pname : 'Galaxy pro',
//         price : 90000
//     },
//     {
//         brand : 'OnePlus',
//         pname : '10T pro',
//         price : 40000
//     },
//     {
//         brand : 'Vivo',
//         pname : 'V11 pro',
//         price : 20000
//     }
// ];

// let onlyApple = product.filter((ele) => {
//     return ele.brand == 'Apple';
// });

// console.log(onlyApple);


