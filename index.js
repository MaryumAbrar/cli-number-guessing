#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
const randomNumber = Math.floor(Math.random() * 6) + 1;
figlet("Number Guessing", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
setTimeout(async () => {
    const answers = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please Guess a Number between 1 - 6: ",
        },
    ]);
    if (answers.userGuessedNumber === randomNumber) {
        console.log("Congratulations! you guessed right number");
    }
    else {
        console.log("You guessed wrong number!");
    }
}, 1000);
