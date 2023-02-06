const Manager = require("../lib/Manager");

describe('Manager Profile', () => {
  
  it('Check the name of Intern Result', () => {
    const answers = new Manager('Dennis', 1, 'dennis@mail.com', 123);

    expect(answers.name).toEqual('Dennis');
    });

  it('Check the result of Office Number',()=>{
    const answers = new Manager('Dennis', 1, 'dennis@mail.com', 123);
    
    expect(answers.office).toEqual(expect.any(Number));
  })

  it('Get Role',()=>{
    const answers = new Manager('Dennis', 1, 'dennis@mail.com', 123);

    expect(answers.getRole()).toEqual('Manager');
  })
 });