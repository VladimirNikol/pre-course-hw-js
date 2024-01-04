let num = Math.floor(Math.random() * 100);
let resultStr;
if(num % 2 === 0){
    resultStr = ' :Это четное число'
} else {
    resultStr = ' :Это нечетное число'
}
console.log(num + resultStr)