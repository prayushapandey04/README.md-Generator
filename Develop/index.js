// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

//import file here = require('path to file')

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please list the title of Project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please put a description for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List any installations necessary for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license was used for your project?',
        choices: ['Creative Commons', 'Boost', 'Apache 2.0', 'MIT', 'IBM', 'None'],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Any contributions/contributors you would like to name in your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please type out instructions on any tests of how to use your project',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log("Your README.md is generated!")
    });
};

// TODO: Create a function to initialize app
function init() {}

// Inquirer prompt(insert questions here)
    //.then((response)) => {
        //writeToFile(ReadMe.md, response)
    //})

// Function call to initialize app
init();

