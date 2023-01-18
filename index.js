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
      teamArray.push(engineer);
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
        name: "internemail",
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

      teamArray.push(intern);
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
      if (response.inputchoice == "Add Engineer") {
        engQuestions();
      } else if (response.inputchoice == "Add Intern") {
        internQuestions();
      } else {
        const fileName = "re.html";
        const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous">
        <!-- Google Fonts -->
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
    </head>
    <body>
    <header>
    <h1 class="text-center">My Team</h1>
    </header>
    <div class='all-cards d-flex justify-content-evenly mx-2'>
    ${mainHtmlFile(teamArray)}
    </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
        crossorigin="anonymous"></script>
        <script src="./assets/script.js"></script>
    </body>
    </html>`;
        fs.writeFile(
          path.join(process.cwd(), "/dist", "result.html"),
          html,
          (err) => (err ? console.log(err) : console.log("Success!"))
        );
      }
    });
};

mgrQuestions();
