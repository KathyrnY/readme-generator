// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your projects title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of your project',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'How to install the software',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'How to use the software',
        name: 'Usage'
    },
    {
        type: 'checkbox',
        message: 'Which license would you like to use?',
        name: 'License',
        choices: [
            {name: 'MIT', value: 'MIT' },
            {name: 'GPI 3.0', vlaue: 'GPI_3.0' },
            {name: 'Apache', value: 'apache' },
            {name: 'None', value: 'value' },
        ],
    },
    {
        type: 'input',
        message: 'Please provide info on how other developers can contribute',
        name: 'Contribute'
    },
    {
        type: 'input',
        message: 'Explain any test created for developers to breakdown and understand',
        name: 'Tests'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, markText) {
    fs.writeFile(fileName, markText, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        const fileName = 'README.md';
        const markText = generateMarkdown(answers);
        writeToFile(fileName, markText);
    })
};

// Function call to initialize app
init();
