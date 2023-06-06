//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//Create an array of questions for user input
const questions = ["Project Name: ","Installation Instructions: ",
"Usage Information: ","Contribution Guidelines: ", "Test Instructions: ",
"Choose License\n (1) for MIT\n(2) for GNU GPLv3\n(3)The Unlicense",
"GitHub username: ","E-Mail address: ","Description: ","Credits: "];
// each of these variables will be the answer the user inputs

let proj, install,usage,contrib,test,licence,username,email,description,credits;
// the init function will control the entire project
function init() {
    // each prompt will ask the user info to go into the README
    inquirer.prompt([
        {name: 'b1',
        message: questions[0]
        },
        {name: 'b9',
        message: questions[8]
        },
        {name: 'b2',
        message: questions[1]
        },
        {name: 'b3',
        message: questions[2]
        },
        {name: 'b4',
        message: questions[3]
        },
        {name: 'b5',
        message: questions[4]
        },
        {name: 'b6',
        message: questions[5]
        },
        {name: 'b7',
        message: questions[6]
        },
        {name: 'b8',
        message: questions[7]
        },
        {name: 'b10',
        message: questions[9]
        }
        
    ])
    .then((answer) =>{
        // set each answer to the let variables above
         proj = answer.b1;
         install = answer.b2;
         usage = answer.b3;
         contrib = answer.b4;
         test = answer.b5;
         //licence = answer.b6;
         credits = answer.b10;
         // there are 3 licenses the user can pick, these ifs
         // determine which one they picked
         if(answer.b6 == 1)
         {
            licence = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
         }
         else if(answer.b6 == 2)
         {
            licence = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
         }
         else if(answer.b6 == 3)
         {
            licence = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
         }
         username = answer.b7;
         email = answer.b8;
         description = answer.b9;
         
    })
    .then((answer) =>{
        // now we create a skeleton for the README with the info the 
        // user has inputted
        const readmeContent = `
# ${proj}

## Table of Contents
- [License](#description)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Credits](#credits)

## License
Here is the license you chose:
${licence}



This is a sample README file for my project.

## Description

${description}

## Installation

${install}

## Usage

${usage}

## Testing

${test}

## Contributing

${contrib}

## Credits

${credits}

## Questions
GitHub: https://github.com/${username} \n
Email me: ${email}
`;

// this will actually create the file
fs.writeFile('README.md',readmeContent, err=>{
    
})

    })


}
init();

