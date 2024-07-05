#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to the Word Count Application");
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "string",
        messsage: "Please Enter your sentence"
    }
]);
let words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your word count is ${words.length}`);
console.log(" ***** Thank you for using Word Count App ***** ");
