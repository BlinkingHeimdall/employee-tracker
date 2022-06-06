INSERT INTO departments(department)
VALUES 
('Information Technology'),
('Accounting'),
('Human Resources');

INSERT INTO roles(title, department_id, salary)
VALUES
('System Admin', 1, 91000),
('IT Professional', 1, 41000),
('Human Resource Manager', 3, 110000),
('Human Resource Assistant', 3, 41000),
('Accounting Manager', 2, 96000),
('Payroll Accountant', 2, 46000);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('Jason', 'Adams', 1, null),
('Eric', 'Walker', 2, 1),
('David', 'Loomis', 3, null),
('Aaron', 'Brown', 4, 3),
('Cable', 'Summers', 5, null),
('Madeline', 'Pryor', 6, 5);