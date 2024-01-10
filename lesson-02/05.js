let passport = {
    name: "Petr",
    surname: "Petrov",
};
let objCopy = Object.assign({}, passport);
objCopy.name = 'Ivan';
console.log(passport)