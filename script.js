const fruitsInventory = {
    apple: 200,
    mango: 300,
    orange: 555,
    banana: 645,
    grapes: 799
}

const fruitsPrice = {
    apple: 100,
    mango: 200,
    orange: 50,
    banana: 25,
    grapes: 100
}

const appleNumber = 4;
const applePrice = fruitsPrice.apple * appleNumber;

console.log(applePrice)

const mangoNumber = 3;
const mangoPrice = fruitsPrice.mango * mangoNumber;
console.log(mangoPrice)

const orangeNumber = 2;
const orangePrice = fruitsPrice.orange * orangeNumber;
console.log(orangePrice)

const total = applePrice + mangoPrice + orangePrice;
console.log(total)

console.log(fruitsInventory)

console.log(fruitsPrice)