const inquirer = require('inquirer');
const fs = require ('fs');
const Choices = require("inquirer/lib/objects/choices");
const { report } = require('process');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile)
const promptUser = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "author",
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
        name: "username",
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
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
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
        name: "webpage:",
        message: "What is the Webpage URL"
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies? (required)",
        validate: input => {
            if (input) {
                return true;
            }else {
                console.log ("Please enter the installation commands!");
            }
        }
    },
    {
        input: "input",
        name: "usage",
        message: "How is the app used? (required)",
        validate: input => {
            if (input) {
                return true;
            }else {
                console.log ("Please provide the necessary instructions");
            }
        }
    },
    {
        input: "input",
        name: "credits",
        message: "Who contribute to this project? "
    },
    {
        type: "list",
        name: "license",
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
        name: "contributions",
        message: "Add guidelines here for contributing:"
    },
])
}

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
    Description
    ${response.description}

    Author's Name
    ${response.author}
    Github Username
    ${response.username}
    User's email address
    ${response.email}
    Projects website URL
    ${response.webpage}

    Table of Contents:
    *Installation
    *Usage
    *License
    *Contribution
    *Tests
    *Questions

    Installation:
    In order to install the necessary dependencies, open the console and run the following:
    \`\`\`${response.installation}\`\`\`

    Usage:
    ${response.usage}

    License:
    This project is licensed under:
    ${response.license}

    Contribution:
    ${response.credits}

    Guidelines how to contribute:
    ${response.contributions}
    
    Questions:
    If you have any questions contact me on [GitHub](https://github.com/${response.username}) or contact 
${response.author} at ${response.email}
    `
}

promptUser().then(function(response){
    const markdown = generateMD(response);
    return writeFileAsync("./test/generatedREADME.md", markdown);
}).then(function() {
    console.log("Generating README.md...");
}).catch(function(err){
    console.log(err)
})