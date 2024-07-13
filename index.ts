#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.bold.magenta("-").repeat(60));
console.log(chalk.magenta.bold("\t\tWord Counter"));
console.log(chalk.magenta.bold("-").repeat(60));

let user_input = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a message"
    }
]);

let word_count =user_input.sentence.trim().split(" ")

console.log("words :" , word_count);

console.log("The senetnce given above contains '" ,word_count.length , "' words");

