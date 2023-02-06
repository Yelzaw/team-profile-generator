const Engineer = require("../lib/Engineer");

//Generate Profile HTML Codes
class Render{
    //Generate Intern HTML card
generateIntern = ({name, id, email, school}) => {
    // const {name, id, email, school} = intern;
    const contentIntern =
    `<div class="card col-3">
    <div class="card-header team-member">
    <h2 class="card-title">${name}</h2>
    <h3 class="card-title"><span class="material-symbols-outlined">cooking</span> Intern</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${id}</li>
    <li class="list-group-item">Email:<a href="mailto:${email}:">${email}</a></li>
    <li class="list-group-item">School:${school}</li>
    </ul>
    </div>
    </div>
    `
    return contentIntern;
}   

//Generate Engineer HTML card
generateEngineer = ({name, id, email, github}) => {
    // const {name, id, email, github} = engineer;
    const contentEngineer =
    `<div class="card col-3">
<div class="card-header team-member">
<h2 class="card-title">${name}</h2>
<h3 class="card-title"><span class="material-symbols-outlined">build</span> Engineer</h3>
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item">ID: ${id}</li>
<li class="list-group-item">Email:<a href="mailto:${email}:">${email}</a></li>
<li class="list-group-item">Github:<a href="https://github.com/${github}" target="_blank">${github}</a></li>
</ul>
</div>
</div>
    `
    return contentEngineer;
}   

//Generate Manager HTML card
generateManager = (manager) =>{
    const {name, id, email, office} = manager;
        const contentManager = 
`<div class="card col-3">
<div class="card-header team-member">
<h2 class="card-title">${name}</h2>
<h3 class="card-title"><span class="material-symbols-outlined">emoji_food_beverage</span> Manager</h3>
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item">ID: ${id}</li>
<li class="list-group-item">Email:<a href="mailto:${email}:">${email}</a></li>
<li class="list-group-item">Office number:${office}</li>
</ul>
</div>
</div>
`
        return contentManager;
    }

    //Generate Final Team Profile HTML
generateHTML = (teamMember) => {
     const contentsTeam = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="./style.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
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
        return contentsTeam;
    }    

    //Support CSS Style
generateCSS(){
    const styleCSS =
    `* {
    box-sizing: border-box;
  }   
  .team-member {
    background-color: bisque;
    color: blue;
  }
  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
  }
  `
  return styleCSS;
}
}
    module.exports = Render;


