const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

let newArr = numbers.map((arr) => {
    const arr2=[];
    arr.map((num) => {
            if (num % 2 === 0) {
                arr2.push(num)
            }
        }
    )
    return arr2
})
console.log(newArr)