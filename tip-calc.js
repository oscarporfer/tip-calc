const readlineSync = require("readline-sync");


// Get total amount of the bill. Wait for user's response.
const userName = readlineSync.questionFloat('What is the total bill amount?');

//Get the party size from the user
const totalPartySize = readlineSync.questionInt("How many people in your party?")

// Get the % of the tip from the user 
const tipPercentage = 20;


//Repeat all of those things back to the user

//The bill tip is the tipPercentage divided by 100

//Total bill is the bill plus the tip

// gett the total amount of the bill divided by the # of people

// Calculate hoe much everyone is paying
