//TITLES IN ALL CAPS
const inquirer = require ("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt ([ 
    // TITLE of the readme 
    {
        type: "input",
        name: "title",
        message: "Enter title for your README"
    },
    //DESCRIPTION
    {
        type: "input",
        name: "description",
        message: "Enter a description for your README"
    },
    // TABLE OF CONTENTS
        // with links for each section Description, Installation, Usage, Contributing, and Tests
        // clicking on the links here take the user to the sections they click on.
    {
        type: "",
        name: "tableofcontents",
        message: ""
    },
    // INSTALLATION instructions
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions"
    },
    // USAGE information
    {
        type: "input",
        name: "usage",
        message: "Enter usage information"
    },
    // LICENSE from a  list of options 
        //badge for that license added at the top of the readme
        // notice added to this license section explaining which license the application is covered under
    {
        type: "list",
        name: "license",
        message: ""
    },
    //CONTRIBUTING contribution guidelines
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines"
    },
    //TESTS instructions
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions"
    },
    //QUESTIONS user inputs github username and email and instructions for how to reach me
        //github username and link to github of username entered
        //email
    {
        type: "input",
        name: "questions",
        message: "Enter your GitHub username",
        message: "Enter your email"
    }

//include one badge that is specific to the repository
//![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
    ]);
}


//place answers in the proper place
function generateREADME (answers) {
    return `
     `
}

// code to know what to do with input
promptUser ()
    .then(function(answers) {
        const README = generateREADME (answers); 
        
        return writeFileAsync("README.md", README);
    })
    .then(function() {
        console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
        console.log(err);
    })