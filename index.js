// Packages used for this application:
const inquirer = require('inquirer');
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
    {
        type: "input",
        name: "Author",
        message: "What is the author's name? (required)",
        validate: input => {
            if (input) {
                return true;
            }else {
                console.log ("Please enter the authors name!");
            }
        }
    },
    {
        type: "input",
        name: "Username",
        message: "What is your Github username? (required)",
        validate: input => {
            if (input) {
                return true;
            }else {
                console.log ("Please enter your Github username!");
            }
        }
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "Title",
        message: "What is your project title? (required)",
        validate: input => {
            if (input) {
                return true;
            }else {
                console.log ("Please enter the name of the project!");
            }
        }
    },
    {
        input: "input",
        name: "description",
        message: "Please enter a description of your project: (required)",
        validate: input => {
            if (input) {
                return true;
            }else {
                console.log ("Please enter a description of the project!");
            }
        }
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
        message: "What does the user need to install to run this app (required)",
        validate: input => {
            if (input) {
                return true;
            }else {
                console.log ("Please enter the installation steps!");
            }
        }
    },
    {
        input: "input",
        name: "Usage",
        message: "How is the app used? (required)",
        validate: input => {
            if (input) {
                return true;
            }else {
                console.log ("Please provide the necessary instructions"),
            }
        }
    },
    {
        input: "input",
        name: "Credits",
        message: "Who contribute to this project? "
    },
    {
        type: "list",
        name: "License",
        message: "What license is being used? (required)",
        choices:["MIT","BSD-3-Clause" "BSD-2-Clause", "Apache", "GPLv2", "Unlicense"],
        validate: input => {
            if (input){
            return true;
        } else {
            console.log("Please pick a license type!");
            return false;
        }
        }
    },
    {
        type: "input",
        name: "Contributions",
        message: "Add guidelines here for contributing:"
    },
    {
    }
])

    //Write to File
function writeToFile(data); {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();