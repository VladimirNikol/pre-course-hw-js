let number1 = Math.floor(Math.random() * 100);
let resultStr;
if (number1 % 2 === 0) {
    resultStr = ':Это четное число'
} else {
    resultStr = ':Это нечетное число'
}
console.log(`${number1} ${resultStr}`)