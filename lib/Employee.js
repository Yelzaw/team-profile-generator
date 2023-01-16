const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require('fs');
var teamMember = "";


class Employee {
    creatTeam(){
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is team manager name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is team manager ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is team manager email address?'
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is team manager office number?'
            }
        ])
        .then ((answers)=>{
            console.log(answers);
            const manager = new Manager();
           teamMember += manager.generateManager(answers);
        })    
        .then (() => {
        this.addictionMember();
        })
    }
    
    addictionMember(){
        inquirer
            .prompt([
                {
                    type:'list',
                    name:'answer',
                    message:'Do you want to add another team member?',
                    choices: ['Engineer', 'Intern', 'Profile completed']
                }
            ])
            .then(val => {
                if(val.answer === 'Engineer'){
                    inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'What is Engineer name?'
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'What is Engineer ID number?'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is Engineer email address?'
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: 'What is Engineer github?'
                        }
                    ])
                    .then ((answers)=>{
                        const engineer = new Engineer();
                        teamMember += engineer.generateEngineer(answers);
                    })    
                    .then (() => {
                    this.addictionMember();
                    })                    
                } else if (val.answer === 'Intern'){
                    inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'What is Intern name?'
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'What is Intern ID number?'
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: 'What is Intern school name?'
                        }
                    ])
                    .then ((answers)=>{
                        const intern = new Intern();
                        teamMember += intern.generateIntern(answers);
                    })    
                    .then (() => {
                    this.addictionMember();
                    })         
                } else {
                    fs.writeFile(`./dist/sample-index.html`, this.generateTeam(teamMember),(err) =>
                    err ? console.log(err) : console.log('Generated team profile ....'));
                    fs.writeFile(`./dist/style.css`, this.generateCSS(),(err) =>
                    err ? console.log(err) : console.log('Generated Style ....'));
                    
                }

            })
    }

    generateCSS(){
        const styleCSS =
        `* {
        box-sizing: border-box;
      }
      `
      return styleCSS;
    }

    generateTeam(teamMember){
        const contentTeam = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="./style.css" />
            <title>Project Team Profile</title>
        </head>
        <body>
            
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-5 mb-3 bg-secondary">
                        <h1 class="text-center">Project Team Profile</h1>
                    </div>            
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-around">
        
                ${teamMember}
    
                    </div>
                </div>
            </div>
        </body>
        </html>
        `
        return contentTeam;
    }    
}

module.exports = Employee;