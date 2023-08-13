//ex1
let myArray = [5, 8, 3];

myArray[1] = 10;

console.log(myArray);

//ex2
let myArray = ["перший рядок", "другий рядок", "третій рядок"];

myArray.push("четвертий рядок");

console.log(myArray);

//ex3
let numbers = [5, 10, 15, 20, 25];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Сума чисел у масиві: " + sum);

//ex4
let nums = [10, 20, 30, 40, 50];

for (let i = 0; i < nums.length; i++) {
    console.log(numbers[i]);
}

//ex5
let strings = ["apple", "banana", "orange", "grape", "watermelon"];

for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
        console.log(strings[i]);
    }
}

//ex6
let numberss = [15, 7, 22, 45, 8, 33, 19, 10, 42, 5];

let max = numberss[0];

for (let i = 1; i < numberss.length; i++) {
    if (numberss[i] > max) {
        max = numberss[i];
    }
}

console.log("Максимальне значення: " + max);

//ex7
let numbersss = [15, 7, 22, 45, 8, 33, 19, 10, 42, 5];

console.log("Парні числа:");

for (let i = 0; i < numbersss.length; i++) {
    if (numbersss[i] % 2 === 0) {
        console.log(numbersss[i]);
    }
}

//ex8
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

let fruits = ['Mango', 'Poly', 'Ajax'];
logItems(fruits);

//ex9
function calculateEngravingPrice(message, pricePerWord) {

    let words = message.split(' ');


    let wordCount = words.length;
    let totalPrice = wordCount * pricePerWord;

    return totalPrice;
}


let message = "Hello world, how are you?";
let pricePerWord = 10;

let totalCost = calculateEngravingPrice(message, pricePerWord);
console.log("Вартість гравіювання: " + totalCost);

//ex10
function findLongestWord(string) {
    let words = string.split(' ');


    let longestWord = '';


    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

let inputStringg = "This is an example string with different words";
let longest = findLongestWord(inputStringg);
console.log("Найдовше слово: " + longest);

//ex11
function formatString(string) {
    const maxLength = 40;

    if (string.length <= maxLength) {
        return string;
    } else {
        return string.slice(0, maxLength) + "...";
    }
}

// Приклад використання функції
let inputString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
let formattedString = formatString(inputString);
console.log("Форматований рядок: " + formattedString);
//ex12
function checkForSpam(message) {
 
    let lowerCaseMessage = message.toLowerCase();


    if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
        return true;
    } else {
        return false;
    }
}

let message1 = "Get the best deals on sale items!";
let message2 = "Important announcement: Don't miss out on our spam offer!";
let result1 = checkForSpam(message1);
let result2 = checkForSpam(message2);

console.log("Результат перевірки message1:", result1); 
console.log("Результат перевірки message2:", result2); 

//ex13
const numberssss = [];
let total = 0;

do {
    input = prompt("Введіть число:");
    
    if (input !== null) {
        input = Number(input); 

        if (!isNaN(input)) {
            numberssss.push(input);
        } else {
            alert("Було введено не число, попробуйте ще раз.");
        }
    }
} while (input !== null);

for (const number of numberssss) {
    total += number;
}

if (numberssss.length > 0) {
    console.log(`Загальна сума чисел дорівнює ${total}`);
}

//ex14
const logins = [];

function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }

    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін вже використовується!';
    }

    allLogins.push(login);
    return 'Логін успішно доданий!';
}


console.log(addLogin(logins, 'user')); 
console.log(addLogin(logins, 'user12345678901234')); 
console.log(addLogin(logins, 'user123')); 
console.log(addLogin(logins, 'user123')); 
console.log(addLogin(logins, 'admin')); 