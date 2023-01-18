function mainHtmlFile(data) {
    let htmlMarkUp = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].getRole() === "Manager") {
        htmlMarkUp += `<div class="card mx-2" style="width: 18rem;">
  <div class="card-header">&#xF18F; ${data[i].getRole()}</div>
  <ul class="list-group list-group-flush align-items-center">
    <li class="list-group-item">${data[i].getName()}</li>
    <li class="list-group-item">ID: ${data[i].getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${data[
      i
    ].getEmail()}">${data[i].getEmail()}</a></li>
    <li class="list-group-item">Office #: ${data[i].getOfficeNumber()}</li>
  </div>`;
      }
      if (data[i].getRole() === "Engineer") {
        htmlMarkUp += `<div class="card mx-2" style="width: 18rem;">
  <div class="card-header">&#xF4B2; ${data[i].getRole()}</div>
  <ul class="list-group list-group-flush align-items-center">
    <li class="list-group-item">${data[i].getName()}</li>
    <li class="list-group-item">ID: ${data[i].getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${data[
      i
    ].getEmail()}">${data[i].getEmail()}</a></li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${data[
      i
    ].getGitHubUserName()}" target="_blank" rel="noopener noreferrer">${data[
          i
        ].getGitHubUserName()}</a></li>
  </div>`;
      }
      if (data[i].getRole() === "Intern") {
        htmlMarkUp += `<div class="card mx-2" style="width: 18rem;">
  <div class="card-header">&#xF6FE; ${data[i].getRole()}</div>
  <ul class="list-group list-group-flush align-items-center">
    <li class="list-group-item">${data[i].getName()}</li>
    <li class="list-group-item">ID: ${data[i].getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${data[
      i
    ].getEmail()}">${data[i].getEmail()}</a></li>
    <li class="list-group-item">School: ${data[i].getSchool()}</li>
  </div>`;
      }
    }
    return htmlMarkUp;
  }
  
  module.exports = mainHtmlFile;  
