const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("./lib/Manager");
const manager = new Manager();

const Engineer = require("./lib/Engineer");
const engineer = new Engineer();

const Intern = require("./lib/Intern");
const intern = new Intern();

const questionsRole =  {
    message: 'What would you like to add for team profile?',
    type: 'list',
    name: 'select',
    choices: ['Manager','Engineer','Intern'],
};

const roleManager = [
            {
                message: 'What is the manager name?',
                type: 'input',
                name: 'name',                
            },
            {
                type:'number',
                name:'id',
                message:'Please fill the ID for manager?',
                validate: (answer) => {
                    if (isNaN(answer)){
                        return 'Please enter valid number';
                    }
                    return true;
                },
            },
            {
                message: 'Please fill the email of manager.',
                type: 'input',
                name: 'email',
                validate: function(email)        {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }                
            },
            {
                type:'number',
                name:'office',
                message:'Please fill the office number of manager?',
                validate: (answer) => {
                    if (isNaN(answer)){
                        return 'Please enter valid number';
                    }
                    return true;
                },
            },
        ];

const roleEngineer = [
    {
        message: 'What is the engineer name?',
        type: 'input',
        name: 'name',                
    },
    {
        type:'number',
        name:'id',
        message:'Please fill the ID for engineer?',
        validate: (answer) => {
            if (isNaN(answer)){
                return 'Please enter valid number';
            }
            return true;
        },
    },
    {
        message: 'Please fill the email of engineer.',
        type: 'input',
        name: 'email',
        validate: function(email)        {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }                
    },
    {
        type:'input',
        name:'github',
        message:'Please fill the office number of manager?',
        validate: (answer) => {
            if (isNaN(answer)){
                return 'Please enter valid number';
            }
            return true;
        },
    },
];

const roleIntern =[
    {
        message: 'What is the intern name?',
        type: 'input',
        name: 'name',                
    },
    {
        type:'number',
        name:'id',
        message:'Please fill the ID for intern?',
        validate: (answer) => {
            if (isNaN(answer)){
                return 'Please enter valid number';
            }
            return true;
        },
    },
    {
        message: 'Please fill the email of intern.',
        type: 'input',
        name: 'email',
        validate: function(email)        {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }                
    },
    {
        type:'input',
        name:'school',
        message:'Please fill the school name of intern?',        
    },
];


class Teamprofile {

    gatherInfoEmployee(role){
        switch(role){
            case "Manager":
                return inquirer.prompt(roleManager).then(function(data){
                    return data;
                });
                break;
            case "Engineer":
                return inquirer.prompt(roleEngineer).then(function(data){
                    return data;
                });
                break;
            case "Intern":
                return inquirer.prompt(roleIntern).then(function(data){
                    return data;
                });
                break;
        }
    }



}










 

    // getEmployee(){
    //     console.log([this.name, this.id, this.email, this.role])
    //    return [this.name, this.id, this.email, this.role];
    // }

//                 .then ((answers)=>{
//                     //Generate intern profile
//                     const intern = new Intern();
//                     teamMember += intern.generateIntern(answers);//use Intern class to generate codes of HTML
//                 })    
//                 .then (() => {
//                 this.addictionMember();
//                 })         
//             } else {
//                 //if user choose completed, HTML file will be exported wit full code of HTML
//                 fs.writeFile(`./dist/sample-index.html`, this.generateTeam(teamMember),(err) =>
//                 err ? console.log(err) : console.log('Generated team profile ....'));
//                 fs.writeFile(`./dist/style.css`, this.generateCSS(),(err) =>
//                 err ? console.log(err) : console.log());
                
//             }

//         })
// }

// function generateCSS(){
//     const styleCSS =
//     `* {
//     box-sizing: border-box;
//   }   
//   .team-member {
//     background-color: bisque;
//     color: blue;
//   }
//   .material-symbols-outlined {
//     font-variation-settings:
//     'FILL' 0,
//     'wght' 400,
//     'GRAD' 0,
//     'opsz' 48
//   }
//   `
//   return styleCSS;
// }

