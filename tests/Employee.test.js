const Employee = require("../lib/Employee");

describe('Employee Profile', () => {
  
  it('Check the name of Employee', () => {
    const answers = new Employee('Yel', 2, 'yza@gmail.com');

    expect(answers.getName()).toEqual('Yel');
    });

  it('Check the id of Employee',()=>{
    const answers = new Employee('Yel', 2, 'yza@gmail.com');
    
    expect(answers.getId()).toEqual(expect.any(Number));
    expect(answers.getId()).toEqual(2);
  })

  it('Check the email of Employee',()=>{
    const answers = new Employee('Yel', 2, 'yza@gmail.com');
    
    expect(answers.getEmail()).toEqual(expect.any(String));
    expect(answers.getEmail()).toEqual('yza@gmail.com');
  })

  it('Get Role',()=>{
    const answers = new Employee('Yel', 2, 'yza@gmail.com');

    expect(answers.getRole()).toEqual('Employee');
  })
 });