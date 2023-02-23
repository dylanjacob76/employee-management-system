const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "management_systemDB",
});

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
      connection.query(query, answer, (err, newDepartment) => {
        if (err) throw err;
        console.log(`\n${answer}, has been successfully added!\n`)
        init();
      });
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
      name: "title",
      type: "input",
      message: "What is the name of the role you'd like to add?"
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary for the new role?",
      validate(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      },
    }
  ])
  .then(answer => {
    const query = "INSERT INTO role SET ?";
    connection.query(query, answer, (err, newRole) => {
      if (err) throw err;
      console.log(`\n${answer.title} with a salary of ${answer.salary}, has been successfully added!\n`);
      init();
    });
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the first name of the new employee you'd like to add?"
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the last name of the new employee you'd like to add?"
      }
    ])
    .then(answer => {
      const query = "INSERT INTO employee SET ?";
      connection.query(query, answer, (err, newRole) => {
        if (err) throw err;
        console.log(`\n${answer.first_name} ${answer.last_name} has been successfully added!\n`);
        init();
      });
    });
};

const updateEmployee = () => {

};



connection.connect(err => {
  if (err) throw err;
  init();
})