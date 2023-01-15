
class Intern {
    
    generateIntern = ({name, id, school}) =>{
        const contentInt = 
        `<div class="card">
        <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title">Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">School:${school}</li>
            </ul>
        </div>
        </div>
        `
        return contentInt;
    }

}

module.exports =Intern;