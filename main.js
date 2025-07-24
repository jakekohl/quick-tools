const fs = require('fs');
const inquirer = require('inquirer');
const { exec } = require('child_process');

// Function to get all runnable JS files within the local repo contents
function getRunnableFiles() {
    const files = fs.readdirSync(__dirname);
    return files.filter(file => file.endsWith('.js') && file !== 'main.js');
}

// Function to prompt the user to select a runnable file
function selectRunnableFile(files) {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'file',
            message: 'Select a runnable file:',
            choices: files,
        },
    ]);
}

// Function to prompt the user for parameter inputs
function getParameters() {
    return inquirer.prompt([
        // Add your parameter prompts here
        // Example:
        // {
        //   type: 'input',
        //   name: 'param1',
        //   message: 'Enter parameter 1:',
        // },
    ]);
}

// Function to run the selected file with the provided parameters
function runFile(file, params) {
    const command = `node ${file} ${Object.values(params).join(' ')}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing ${file}: ${error.message}`);
            return;
        }
        console.log(stdout);
    });
}

// Main function
async function main() {
    const files = getRunnableFiles();
    const { file } = await selectRunnableFile(files);
    const params = await getParameters();
    runFile(file, params);
}

// Run the main function
main();