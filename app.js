const inquirer = require('inquirer');
const db = require('./db/connection');


function init() {
    function options() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['all departments','all roles', 'all employees', 'add department', 'add role', 'add employee', 'update employee role']
            },
        ]). then (input => {
            switch(input.action) {
                case 'all departments':
                    viewDepartments();
                    break;
                case 'all roles':
                    viewRoles();
                    break;
                case 'all employees':
                    viewEmployees();
                    break;
                case 'add department':
                    addDepartment();
                    break;
                case 'add role':
                    addRole();
                    break;
                case 'add employee':
                    addEmployee();
                    break;
                case 'update employee role':
                    updateRole();
                    break;
                };
            });
        };
        
        function restart() {
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'confirm_restart',
                    message: 'Would you like to do something else?',
                    default: false
                }
            ])
            .then(confirm => {
                if(confirm.confirm_restart) {
                    options();
                }
            });
        };

        function viewDepartments() {
            const sql = `SELECT * FROM departments`;

            db.query(sql, (err, rows) => {
                if(err) {
                    console.log(err.message);
                    return;
                }
                console.table(rows);
                restart();
            });
        };

        function viewRoles() {
            const sql = `SELAECT * From roles`;
            db.query(sql, (err, rows) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.table(rows);
            });
    
        };
    
        function viewEmployees() {
                const sql = `SELECT * FROM employees`;
                db.query(sql, (err, rows) => {
                    if (err) {
                        console.log(err.message)
                        return;
                    }
                    console.table(rows);
                    restart();
                });
        };
    
        function addDepartment() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'new-department',
                    message: 'What is the new department called'
                }
            ]).then(input => {
                const sql = `INSERT INTO departments (title) VALUES (?)`;
                const params = input.new_department;
                db.query(sql, params, (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    viewDepartments();
                });
            });
        };;
    
        function addRole() {

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'What is the new role called?'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: `What is the new role's salary?`,
                    validate: input => {
                        if(isNaN(input)) {
                            console.log('Please enter a number');
                            return false;
                        } else {
                            return true;
                        };
                    }
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: `What is the new role's department id?`,
                    validate: input => {
                        if(!isNaN(input)) {
                            return true;
                        } else {
                            console.log(' Please enter a number');
                            return false;
                        };
                    }
                }
            ]).then(input => {
                const sql = `INSERT INTO roles(title, salary, department_id) VALUES (?,?,?)`;
                const params = [input.title, input.salary, input.department_id];
                db.query(sql, params, (err, result) => {
                    if(err) {
                        console.log(err);
                        return;
                    }
                    viewRoles();
                });
            });
        };
    
        function addEmployee() {

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'new_department',
                    message: 'What is the new department called?'
                }
            ]).then(input => {
                const sql = `INSERT INTO departments (title) VALUES (?)`;
                const params = input.new_department;
                db.query(sql, params, (err, result) => {
                    if(err) {
                        console.log(err);
                        return;
                    }
                    viewDepartments();
                });
            });
        };
    
        function updateRole() {
    
        };
    
        options();
    };
    
    init();