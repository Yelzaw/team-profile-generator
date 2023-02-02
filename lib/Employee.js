
class Employee {
    constructor(){
        this.name = '';
        this.id = 0;
        this.email = '';
        this.role = 'Employee';
    }
    
    getName(){
        return inquirer
        .prompt([
            {
                message: 'What is the employee name?',
                type: 'input',
                name: 'name',                
            },
        ])
        .then((answer)=>{
            this.name = answer;
        })
    }

    getID() {
        return inquirer
        .prompt([
                    {
                        type:'number',
                        name:'id',
                        message:'Please fill the ID for employee?',
                        validate: (answer) => {
                            if (isNaN(answer)){
                                return 'Please enter valid number';
                            }
                            return true;
                        },
                    },
                ])
        .then((answer)=>{
            this.id = answer;
        })
    }
    getEmail() {
        return inquirer
        .prompt([
            {
                message: 'Please fille the email of employee.',
                type: 'input',
                name: 'email',
                validate: function(email)        {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }                
            },
        ])
        .then((answer)=>{
            this.email = answer;
        })
    }
    getEmployee(){
        console.log([this.name, this.id, this.email, this.role])
       return [this.name, this.id, this.email, this.role];
    }
}

module.exports = Employee;

 //     const contentTeam = 
    //     `<!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    //         <link rel="stylesheet" type="text/css" href="./style.css" />
    //         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    //         <title>Project Team Profile</title>
    //     </head>
    //     <body>
            
    //         <div class="container-fluid">
    //             <div class="row">
    //                 <div class="col-12 p-5 mb-3 bg-secondary">
    //                     <h1 class="text-center">Project Team Profile</h1>
    //                 </div>            
    //             </div>
    //         </div>
    //         <div class="container">
    //             <div class="row">
    //                 <div class="col-12 d-flex justify-content-around">
        
    //             ${teamMember}
    
    //                 </div>
    //             </div>
    //         </div>
    //     </body>
    //     </html>
    //     `
    //     return contentTeam;
    // }    