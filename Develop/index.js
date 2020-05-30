const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your project title?",
  },

  {
    type: "input",
    name: "description",
    message: "Add a Description:",
  },

  {
    type: "input",
    name: "installation",
    message: "Add introduction on how to install:",
  },

  {
    type: "input",
    name: "usage",
    message: "Usage, What is your project used for:",
  },

  { type: "input", name: "License", message: "License:" },

  {
    type: "input",
    name: "contribution",
    message: "Who contributed in the project:",
  },

  { type: "input", name: "test", message: "Enter Test result:" },

  {
    type: "input",
    name: "question",
    message: "Enter the Question you wish to add to the README:",
  },

  {
    type: "input",
    name: "profile",
    message: "Add your Github Profile Picture:",
  },

  {
    type: "input",
    name: "email",
    message: "Add your Github Email:",
  },
];

// function respond(answer) {
//  const new_data = JSON.stringify(answer, null, " ");
//
//  console.log(JSON.stringify(answer, null, " "));
//
//  fs.writeFile("README.md", new_data, (err) => {
//    if (err) {
//      return console.log(err);
//    }
//    console.log("OK");
//  });
// }

function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer
    .prompt(questions)
    .then(filterUnansweredQuestion)
    .then((inquirerResponses) =>
      writeToFile("README.md", generateMarkdown({ ...inquirerResponses }))
    );
}

init();
