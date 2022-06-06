INSERT INTO departments(title)
VALUES 
('Information Technology'),
('Accounting'),
('Human Resources');

INSERT INTO roles(title, salary, department_id)
VALUES
('IT Professional', 37000, 1);
('IT Specialist', 28000, 1),
('IT Professional', 37000, 1),
('Back-End Developer', 90000, 1);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('Jason', 'Adams', 3, null),
('Eric', 'Walker', 1, 1);