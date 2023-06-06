// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =  require('fs');
const GenMD = require('./utiles/generatemarkdown.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');
const { error } = require('console');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Do you want a title for your project?',
    },
    {
        type: 'input',
        Name: 'Installation',
        message: 'Do you want an installation guide section?',

    },
    {
        type: 'input',
        name: 'Features',
        message: 'Do you want a "Features" section?',
    },
    {
        type: 'input',
        name: 'Usage',
        message:'Do you want a "Usage" section?',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Do you want a Project "Credits" section?',
    },
    {
        type: 'input',
        name: 'Lisence',
        message: 'Do you have a "lisence" for that Project?',
        Choices: ['MIT', 'Apache 2.0','gpl-2.0'],
        filter(choice) {
            return choice
        }

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
         if (err) {
            console.log(err);
         } else {
            console.log(`Successfully wrote ${fileName}`);
         }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .Promp(questions)
    .then((data) => {
        const markdown = GenMD.generateMarkdown(data);
        writeToFile('ReadMe.md', markdown);
    })
    .catch((error) => {
        console.log(error);
    });

}

// Function call to initialize app
init();
