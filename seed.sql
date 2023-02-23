USE management_systemDB;

INSERT INTO department (department_name)
VALUES ("Sales");
INSERT INTO department (department_name)
VALUES ("Engineering");
INSERT INTO department (department_name)
VALUES ("Finance");
INSERT INTO department (department_name)
VALUES ("Legal");
INSERT INTO department (department_name)
VALUES ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 125000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 70000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 125000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Miyamoto", "Musashi", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Marcus", "Aurelius", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Itachi", "Uchiha", 3);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Anakin", "Skywalker", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Clark", "Kent", 5);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Bruce", "Wayne", 6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kobe", "Bryant", 7);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Saquon", "Barkley", 8);
