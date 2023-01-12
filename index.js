const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

const fs = require("fs");
const path = require("path");
const generateHtmlFile = require("./src/gen-html");

const mgrArray = [];
const engArray = [];
const internArray = [];
let htmlFile = "";

// Manager Questions Function
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
        mgrArray.push(manager);
        optionQuestion();
      });
  };

  // Engineer fx questions
engQuestions = function () {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engname",
          message: "Enter name of engineer:",
        },
        {
          type: "input",
          name: "engid",
          message: "Enter engineer ID #:",
        },
        {
          type: "input",
          name: "engemail",
          message: "Enter engineer email:",
        },
        {
          type: "input",
          name: "enggithub",
          message: "Enter engineer GitHub:",
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.engname,
          response.engid,
          response.engemail,
          response.enggithub
        );
        engArray.push(engineer);
        optionQuestion();
      });
  };
  
  // Intern fx questions
  internQuestions = function () {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internname",
          message: "Enter name of intern:",
        },
        {
          type: "input",
          name: "internid",
          message: "Enter intern ID #:",
        },
        {
          type: "input",
          name: "engemail",
          message: "Enter intern email:",
        },
        {
          type: "input",
          name: "internschool",
          message: "Enter name if intern school:",
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.internname,
          response.internid,
          response.internemail,
          response.internschool
        );
        internArray.push(intern);
        optionQuestion();
      });
  };

  optionQuestion = function () {
    inquirer
      .prompt([
        {
          type: "list",
          name: "inputchoice",
          message: "Use arrow key to choose option",
          choices: ["Add Engineer", "Add Intern", "Complete Team"],
        },
      ])
      .then((response) => {
        if (response.inputchoise == "Add Engineer") {
          engQuestions();
        } else if (response.inputchoise == "Add Intern") {
          internQuestions();
        } else {
  