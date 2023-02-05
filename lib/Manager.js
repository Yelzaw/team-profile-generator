const inquirer = require('inquirer');
const Employee = require('./Employee');
const employee = new Employee();

class Manager extends Employee{
    constructor(name, id, email, office, role){
        this.office = office;
        super(name, id, email, this.role);
    }
    
    getRole(){
        this.role = 'Manager';
    }
}




    

module.exports = Manager;