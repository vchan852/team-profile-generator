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

