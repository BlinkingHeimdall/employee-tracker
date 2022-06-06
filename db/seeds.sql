INSERT INTO departments(department)
VALUES 
('Information Technology'),
('Accounting'),
('Human Resources');

INSERT INTO roles(title, department_id, salary)
VALUES
('IT Professional', 1, 37000);
('IT Specialist', 1, 28000),
('IT Professional', 1, 37000),
('Back-End Developer', 1, 90000);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('Jason', 'Adams', 3, null),
('Eric', 'Walker', 1, 1);