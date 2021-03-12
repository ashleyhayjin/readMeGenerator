const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation needed for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would someone use this application?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Any contributors?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the testing instructions of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Are there any licenses for your project?',
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email for contact?',
    },


])
.then (answers => {

    fs.writeFile('README.md', `
#  ${answers.title} 
## Table of Contents 
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](Usage)
4. [Contributors](Contributors)
5. [Tests](tests) 

## Description 

${answers.description}

## Installation

${answers.installation}

## Usage 
${answers.usage}
# Contributors

${answers.contributors}

## Tests

${answers.tests}

## Licenses

${answers.license}

## Github 

[Github]{www.github.com/${answers.github}}

## Contact Me

If you have any other questions, contact me at my email : ${answers.email}
` 
    , (err) => {
        if(err){
            console.log("error");
        } else {
            console.log("success.");
        }
    }  
    );
})