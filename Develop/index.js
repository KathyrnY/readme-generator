// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'list',
    message: 'Which license would you like to use?',
    name: 'license',
    choices: [
    'MIT',
    'BSD',
    'Apache 2.0',
    'None',
    ],
    },
    {
        type: 'input',
        message: 'What is your projects title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How to install the software.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How to use the software',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please provide info on how other developers can contribute',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Explain any test created for developers to breakdown and understand',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your github?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please write any questions you may have',
        name: 'questions'
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
