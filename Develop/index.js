// Packages used for this application:
const inquirer = require('inquirer');
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
    {
        type: "input",
        name: "Author",
        message: "What is the author's name?"
    },
    {
        type: "input",
        name: "Username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "Title",
        message: "What is your project title?"
    },
    {
        input: "input",
        name: "description",
        message: "Description:"
    },
    {
        type: "input",
        name: "Webpage URL:",
        message: "Webpage"
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Table of Contents"
    },
    {
        type: "input",
        name: "Installation",
        message: "What does the user need to install to run this app"
    },
    {
        input: "input",
        name: "Usage",
        message: "How is the app used? Provide necessary instructions"
    },
    {
        type: "input",
        name: "License",
        message: "What license is being used?"
    },
    {
        input: "input",
        name: "Credits",
        message: "Who contribute to this project?"
    },
    {
        type: "input",
        name: "License",
        message: "What license is being used?"
    },

{

}
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();