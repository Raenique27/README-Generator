// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the Github link to your profile.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What should a user do to install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should the user know in order to use your application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project need to have ?',
        choices: ['MIT', 'ISC', 'MPL 2.0', 'EPL 1.0']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should a user know before contributing to the application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What does the user need to enter in order to run tests?'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => err ? console.log(err) : console.log('README Created!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile('./output1/README.md',generateMarkdown(answers));
        })
        .catch(error => {
            console.log(error)
        });
};

// Function call to initialize app
init();
