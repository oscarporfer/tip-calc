const readlineSync = require("readline-sync");


// Get total amount of the bill. Wait for user's response.
const totalAmount = readlineSync.questionFloat('What is the total bill amount? ');

//Get the party size from the user
const totalPartySize = readlineSync.questionInt("How many people in your party? ")

// Get the % of the tip from the user 
const tipPercentage = readlineSync.questionFloat("What percentage would you like to tip? ");


//Repeat all of those things back to the user
console.log(`The total amount of your bill is $${totalAmount.toFixed(2)}`);
console.log(`The total party size is ${totalPartySize}`);
console.log(`The total tip amount is${tipPercentage}%`);

//The bill tip is the tipPercentage divided by 100
let percentage = tipPercentage / 100;
let totalAmountToTip = totalAmount * percentage;

//Total bill is the bill plus the tip
let billWithTip = totalAmount + totalAmountToTip;

// gett the total amount of the bill divided by the # of people
let totalPerPerson = billWithTip / totalPartySize;

// Calculate hoe much everyone is paying
console.log(totalAmountToTip.toFixed(2) + " Is your total amount in tip.");
console.log(billWithTip.toFixed(2) + " is your total with the tip");
console.log(totalPerPerson.toFixed(2) + " this is the total for each person");