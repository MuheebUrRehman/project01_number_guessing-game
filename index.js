#! /usr/bin/env node
import inquirer from "inquirer";
// random number generated by system
const randomNumber = Math.floor(Math.random() * 6 + 1);
// welcome message and getting user input
const answer = await inquirer.prompt([
    {
        name: "welcome message",
        type: "text",
        message: "welcome to number guessing game, press ENTER to continue",
    },
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
// checking the answer
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation!! you guessed the right number");
}
else {
    console.log("Wrong guess!! try again");
}
