const inquirer = require('inquirer');
const db = require('./db/connection');


function init() {
    function options() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                choices: ['all roles', 'all employees', 'add department', 'add role', 'add employee', 'update employee role']
            },
        ]). then (input => {
            switch(input.action) {
                case 'all roles':
                    viewRoles();
                    break;
                    case 'view all employees':
                        viewEmployees();
                        break;
                    case 'add a department':
                        addDepartment();
                        break;
                    case 'add a role':
                        addRole();
                        break;
                    case 'add an employee':
                        addEmployee();
                        break;
                    case 'update an employee role':
                        updateRole();
                        break;
                };
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
    
        };
    
        function addDepartment() {
    
        };
    
        function addRole() {
    
        };
    
        function addEmployee() {
    
        };
    
        function updateRole() {
    
        };
    
        options();
    };
    
    init();