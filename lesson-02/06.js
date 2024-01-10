let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
const newPassportWithAddress = structuredClone(passportWithAddress);
passportWithAddress.address.city = 'Bobryisk';
console.log(newPassportWithAddress.address.city)
console.log(passportWithAddress.address.city)
