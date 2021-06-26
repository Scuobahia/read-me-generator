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
        choices:["MIT","BSD 3", "Apache", "GPL", "None"],
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
])


function generateMD(response){
    let badge = "";
    if(response.license == "MIT"){
        badge = "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
    }else if (response.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    }else if (response.license == "GPL 3.0"){
        badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    }else if (response.license == "BSD 3"){
        badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    }
    return `# ${response.title} ${badge}
    ${response.description}
    ## Tbale of Contents:
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contribution](#contribution)
    *[Tests](#tests)
    *[Questions](#questions)

    ###Installation:
    
    
    `