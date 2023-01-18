const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

const fs = require("fs");
const path = require("path");
const mainHtmlFile = require("./src/main-html");

const teamArray = [];
let htmlFile = "";

// Manager Fx questions
mgrQuestions = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "mgrname",
        message: "Enter name of team manager:",
      },
      {
        type: "input",
        name: "mgrid",
        message: "Enter manager ID #:",
      },
      {
        type: "input",
        name: "mgremail",
        message: "Enter manager email:",
      },
      {
        type: "input",
        name: "mgrofficenum",
        message: "Enter manager office #:",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.mgrname,
        response.mgrid,
        response.mgremail,
        response.mgrofficenum
      );
      teamArray.push(manager);
      optionQuestion();
    });
};

