const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern");

const Render = require("./src/generateHTML");
const render = new Render();

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
                message:'Please fill the ID for manager.',
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
                // mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }                
            },
            {
                type:'number',
                name:'office',
                message:'Please fill the office number of manager.',
                validate: (answer) => {
                    if (isNaN(answer)){
                        return 'Please enter valid number';
                    }
                    return true;
                },
            },
        ])
        .then ((answers)=>{
            // Store manager information
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            
            teamMember.push(manager);
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
                            message:'Please fill the ID for engineer.',
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
                            // Mail check (return true if valid mail)
                            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                            }                
                        },
                        {
                            type:'input',
                            name:'github',
                            message:'Please fill the name of github.',                            
                        },
                    ])
                    .then ((answers)=>{
                        // console.log(answers);
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        // console.log(engineer);
                        teamMember.push(engineer);
                        // console.log(teamMember);
                    })    
                    .then (() => {
                        // console.log(teamMember);
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
                            message:'Please fill the ID for intern.',
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
                            // mail check (return true if valid mail)
                            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                            }                
                        },
                        {
                            type:'input',
                            name:'school',
                            message:'Please fill the school name of intern.',        
                        },
                    ])
                    .then ((answers)=>{
                        // Store intern data into team
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        
                        teamMember.push(intern);
                    })    
                    .then (() => {
                        // Loop the questions
                        return addictionMember(teamMember);
                    })         
                } else {
                    let teamDataForHTML=""; 

                    for(let i=0; i<teamMember.length; i++){
                        //Filtering data for team cards
                        if(teamMember[i].getRole()==="Manager"){                            
                            teamDataForHTML += render.generateManager(teamMember[i]);
                        } else if(teamMember[i].getRole()==="Engineer"){
                            const {name, id, email, github} = teamMember[i];
                            teamDataForHTML += render.generateEngineer({name, id, email, github})
                        } else if(teamMember[i].getRole()==="Intern"){
                            const {name, id, email, school} = teamMember[i];
                            teamDataForHTML += render.generateIntern({name, id, email, school})
                        }    
                    }
                    
                    // Export HTML and CSS file
                    const finalTeamProfile = render.generateHTML(teamDataForHTML);
                    fs.writeFile(`./dist/sample-index.html`, finalTeamProfile,(err) =>
                    err ? console.log(err) : console.log('Generated team profile ....'));
                    fs.writeFile(`./dist/style.css`, render.generateCSS(),(err) =>
                    err ? console.log(err) : console.log());

                }
            })
        }
    
creatTeam()