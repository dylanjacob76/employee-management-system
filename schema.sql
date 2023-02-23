DROP DATABASE IF EXISTS management_systemDB;
CREATE database management_systemDB;

USE management_systemDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name NOT NULL VARCHAR(30)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title NOT NULL VARCHAR(30),
  salary NOT NULL DECIMAL(5,2) 
  /* department_id INT NOT NULL FOREIGN KEY REFERENCES department(id); */
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name NOT NULL VARCHAR(30),
  last_name NOT NULL VARCHAR(30)
  /* role_id INT NOT NULL FOREIGN KEY REFERENCES role(id) */
  /* manager_id INT FOREIGN KEY REFERENCES employee(manager_id) */
);


