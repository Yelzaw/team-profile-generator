const Employee = require("./lib/Employee");

// Initialize application
const employee = new Employee ();

// Start application
employee.creatTeam();

// .then((member)=>{
//    fs.writeFile(`./sample-index.html`,member,(err)=>
//    err ? console.log(err) : console.log('Generating Team Profile ...')
//    );
//    })