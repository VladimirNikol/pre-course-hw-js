const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

(() => {
    if (words.indexOf("апельсин") > -1){
        console.log("Ура! нашел")
    } else if(words.indexOf("апельсин") === -1) {
        console.log("Придется поискать в другом магазине…")
    }
})(words)