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
        message: "Enter the license(s) used for this application",
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','NONE']

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
        name: "github",
        message: "Enter your GitHub username",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    }

//include one badge that is specific to the repository
//
    ]);
}

 // TABLE OF CONTENTS
        // with links for each section Description, Installation, Usage, Contributing, and Tests
        // clicking on the links here take the user to the sections they click on.
    

//place answers in the proper place
function generateREADME (answers) {
    return `
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)
# TITLE: ${answers.title}


# DESCRIPTION: ${answers.description}

# TABLE OF CONTENTS:
###1. [Installation](#Installation)
###2. [Usage](#Usage) 
###3. [License](#License) 
###4. [Contributing](#Contributing)
###5. [Questions]($Questions) 

# INSTALLATION: ${answers.installation}

# USAGE: ${answers.usage}

# LICENSE: 
This application is covered under the following license(s) - ${answers.license}

# CONTRIBUTING: ${answers.contributing}

# QUESTIONS: 
For any questions regarding the code used please refer to my GitHub page here: [Link to GitHub](https://github.com/${answers.github})

For further questions you can reach me personally by email at: ${answers.email}
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