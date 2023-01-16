
class Manager {
    
    generateManager = ({name, id, email, office}) =>{
        const contentMgr = 
        `<div class="card col-3">
        <div class="card-header team-member">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title">Manager</h3>
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
        return contentMgr;
    }

}

module.exports = Manager;