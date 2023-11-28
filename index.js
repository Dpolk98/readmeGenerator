// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const renderLicenseBadge = require('./utils/generateMarkdown.js');
const renderLicenseLink = require('./utils/generateMarkdown.js');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    //Name
    {
        type: 'input',
        name: 'title',
        message: 'Input the title of your project',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Enter a project title to continue')
                return false;
            }
        }
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project',
        validate: descInput => {
            if (descInput) {
                return true
            } else {
                console.log('Enter a project description to continue')
                return false;
            }
        }
    },
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: "Please describe the installation process for your project (hint: use the backslash key to begin a new line without submitting what you've typed",
        validate: installInput => {
            if (installInput) {
                return true
            } else {
                console.log('Enter an installation process to continue')
                return false;
            }
        }
    },
    //License
    {
        type: 'rawlist',
        name: 'license',
        message: 'Please select a License',
        choices: [ 'MIT', 'Apache 2.0', 'Creative Commons 0', 'none' ],
        validate: licenseInput => {
            if (licenseInput) {
                return true
            } else {
                console.log('Choose a license to continue')
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        renderLicenseBadge(data);
        renderLicenseLink(data);
        writeToFile("./README.md", data);
    });
}

// Function call to initialize app
init();
