const inquirer = require('inquirer');
var answers;
class Manager {
    constructor(){
        this.name = 'Yel';
        this.id = 2;        
    }
    infoOfManager(){
        return this.name;
        // answers = ['Yel','1','Manager', 'abc@m.com', 123];
        // return answers;
    }    
}
    //Generate Manager Profile HTML Codes
//     roleManager = ({name, id, email, office}) =>{
//         const contentMgr = 
// `<div class="card col-3">
// <div class="card-header team-member">
// <h2 class="card-title">${name}</h2>
// <h3 class="card-title"><span class="material-symbols-outlined">emoji_food_beverage</span> Manager</h3>
// </div>
// <div class="card-body">
// <ul class="list-group">
// <li class="list-group-item">ID: ${id}</li>
// <li class="list-group-item">Email:<a href="mailto:${email}:">${email}</a></li>
// <li class="list-group-item">Office number:${office}</li>
// </ul>
// </div>
// </div>
// `
//         return contentMgr;
//     }

// }

module.exports = Manager;