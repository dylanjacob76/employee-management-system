const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "management_systemDB",
});

// function which prompts the user for what action they should take
const init = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        { name: "View All Departments", value: viewDepartments },
        { name: "View All Roles", value: viewRoles },
        { name: "View All Employees", value: viewEmployees },
        { name: "Add a Department", value: addDepartment },
        { name: "Add a Role", value: addRole },
        { name: "Add an Employee", value: addEmployee },
        { name: "Update an Employees Role", value: updateEmployee },
        { name: "EXIT", value: () => connection.end() }
      ]
    })
    .then(answer => {
      answer.action();
    });
};

const viewDepartments = () => {
  const query = "SELECT * FROM department";
  connection.query(query, (err, departments) => {
    if (err) throw err;
    console.table(departments);
    init();
  });
};

const viewRoles = () => {
  const query = "SELECT * FROM role";
  connection.query(query, (err, roles) => {
    if (err) throw err;
    console.table(roles);
    init();
  });
};

const viewEmployees = () => {
  const query = "SELECT * FROM employee";
  connection.query(query, (err, employees) => {
    if (err) throw err;
    console.table(employees);
    init();
  })
};

const addDepartment = () => {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "What is the name of the department you'd like to add?"
    })
    .then(answer => {
      const query = "INSERT INTO department SET ?";
      connection.query(query, answer, (err, res) => {
        if (err) throw err;
        console.log(`${answer}, has been successfully added!`)
        init();
      })
    })
};

const addRole = () => {

};

const addEmployee = () => {

};

const updateEmployee = () => {

};



// connect to the mysql server and sql database
connection.connect(err => {
  if (err) throw err;
  // run the init function after the connection is made to prompt the user=
  init();
})