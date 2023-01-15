
class Engineer {
    
    generateEngineer = ({name, id, email, github}) =>{
        const contentEng = 
        `<div class="card">
        <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title">Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email:<a href="mailto:${email}:">${email}</a></li>
                <li class="list-group-item">Github:<a href="https://github.com/${github}">${github}</a></li>
            </ul>
        </div>
        </div>
        `
        return contentEng;
    }

}

module.exports = Engineer;