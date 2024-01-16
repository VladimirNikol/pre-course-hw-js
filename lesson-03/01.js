const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter( (n) => {
        if (n === "черный" || n === "красный" || n === "желтый"){
            return n
        }
    } ).join('-')
}

console.log(createColorString());
