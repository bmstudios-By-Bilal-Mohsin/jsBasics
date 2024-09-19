//Concatination and InterPolation

var price = 50
var itemName = "Cup"
var today = new Date
var messageToPrint = "The price for your "+ itemName +" is "+ price +" USD"
var messageToPrint2 = `The price for your ${itemName} is ${price} on ${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`

console.log(messageToPrint)
console.log(messageToPrint2)