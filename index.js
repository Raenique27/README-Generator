// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Username',
        message: 'What is your Github Username?'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please enter the Github link to your profile.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },
    {
        type: 'input',
        name: 'Project Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Project Description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What should a user do to install your application?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What should the user know in order to use your repo?'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license does your project need to have ?',
        choices: ['MIT', 'ISC', 'MPL', 'EPL']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should a user know before contributing to the repo?'
    },
    {
        type: 'input',
        name: 'Testing',
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
            console.log(answers);
        })
}

// Function call to initialize app
init();
