const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern");


var teamMember = [];
    // Start with questions for manager profile 
 function   creatTeam(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is team manager name?'
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
        ])
        .then ((answers)=>{
            // Generate Manager profile
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            // const part = Object.keys(manager);
            // console.log(part);
            console.log(manager.getRole());
            teamMember.push(manager);
            console.log(teamMember);
        })
        .then(()=>{addictionMember()})
}


    function addictionMember(){
        //prompt the questions for Engineer, Intern or Completed
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
                // based on the answer questions will continue
                if(val.answer === 'Engineer'){
                    inquirer
                    .prompt([
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
                            message:'Please fill the name of github?',                            
                        },
                    ])
                    .then ((answers)=>{
                        console.log(answers);
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        console.log(engineer);
                        teamMember.push(engineer);
                        console.log(teamMember);
                    })    
                    .then (() => {
                        console.log(teamMember);
                        return addictionMember(teamMember);
                    })                              
                } else if (val.answer === 'Intern'){
                    //if user choose Intern, will question prompt for intern
                    inquirer
                    .prompt([
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
                    ])
                    .then ((answers)=>{
                        console.log(answers);
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        console.log(intern);
                        teamMember.push(intern);
                        console.log(teamMember);
                    })    
                    .then (() => {
                        console.log(teamMember);
                        return addictionMember(teamMember);
                    })         
                } else {
                    console.log("Team Profile have created.")
                }
            })
        }
    //     .then (() => {
    //         // Prompt the question for any additional team member
    //     this.addictionMember();
    //     })
    // }
    // // Function to add another team memeber profile
    // addictionMember(){
    //     else {
    //                 //if user choose completed, HTML file will be exported wit full code of HTML
    //                 fs.writeFile(`./dist/sample-index.html`, this.generateTeam(teamMember),(err) =>
    //                 err ? console.log(err) : console.log('Generated team profile ....'));
    //                 fs.writeFile(`./dist/style.css`, this.generateCSS(),(err) =>
    //                 err ? console.log(err) : console.log());
                    
    //             }

    //         })



creatTeam()







 

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

