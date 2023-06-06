// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =  require('fs');
const GenND = require('./utiles/generatemarkdown.js');
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
        name: 'Credits',
        message: 'Do you want a Project credits section?',

    },
    {
        type: 'input',
        name: 'Features',
        message: 'Do you want a Features section?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
