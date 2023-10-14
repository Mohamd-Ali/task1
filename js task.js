/* 
1-
   function sumObjectValues(obj) {
    let sum = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

2-
async function asyncBlocks() {
    await block1();
    await block2();
    await block3();
}

async function block1() {
    // Code for block 1
}

async function block2() {
    // Code for block 2
}

async function block3() {
    // Code for block 3
}

asyncBlocks(); // Call the function to execute the blocks sequentially

3-
function getMaxValueAndIndex(arr) {
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
    return { max, index };
}

// Example usage
let numbers = [1, 5, 3, 9, 2];
let result = getMaxValueAndIndex(numbers);
console.log(`Maximum value: ${result.max}, Index: ${result.index}`);

4-
function getDaysDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.abs((date1 - date2) / oneDay);
    return Math.floor(diffDays);
}

// Example usage
let date1 = new Date('2023-10-01');
let date2 = new Date('2023-10-10');
let difference = getDaysDifference(date1, date2);
console.log(`Difference in days: ${difference}`);

5-
class Calculator {
    sum(a, b) {
        return a + b;
    }

    difference(a, b) {
        return a - b;
    }

    product(a, b) {
        return a * b;
    }

    dividend(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Division by zero is not allowed!";
        }
    }
}

// Example usage
const calculator = new Calculator();
console.log(calculator.sum(2, 3)); // Output: 5
console.log(calculator.difference(5, 2)); // Output: 3
console.log(calculator.product(2, 3)); // Output: 6
console.log(calculator.dividend(6, 2)); // Output: 3
console.log(calculator.dividend(6, 0)); // Output: Division by zero is not allowed!

6-
function getMultipleValues() {
    return {
        value1: 'First Value',
        value2: 'Second Value'
    };
}

// Example usage
const { value1, value2 } = getMultipleValues();
console.log(value1, value2);

7-
function reverseArray(arr) {
    return arr.reverse();
}

// Example usage
let reversedArray = reverseArray([1, 2, 3, 4]);
console.log(reversedArray); // Output: [4, 3, 2, 1]

8-
function convertObjectToArray(obj) {
    return Object.entries(obj);
}

// Example usage
let obj = { a: 1, b: 2 };
let array = convertObjectToArray(obj);
console.log(array); // Output: [["a", 1], ["b", 2]]

9-
function convertTo24HourFormat(time12h) {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');
    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
}

// Example usage
let time12h = '03:30 PM';
let time24h = convertTo24HourFormat(time12h);
console.log(`Converted Time: ${time24h}`); // Output: 15:30

10-
function add(a) {
    return function(b) {
        return a + b;
    };
}

var result = add(2)(3);
console.log(result); // Output: 5

11-
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "John", age: 35 }
];

function checkUserExists(usersArray, name) {
    return usersArray.some(user => user.name === name);
}

// Example usage
let userExists = checkUserExists(users, "John");
console.log(`User with name "John" exists: ${userExists}`); // Output: true


*/