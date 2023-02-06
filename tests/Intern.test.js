const Intern = require("../lib/Intern")

describe('Intern Profile', () => {
  
  it('Check the name of Intern Result', () => {
    const answers = new Intern('Zak', 3, 'zak@mail.com', 'Forest Hill');

    expect(answers.name).toEqual('Zak');
    });

  it('Check the result of input School',()=>{
    const answers = new Intern('Zak', 3, 'zak@mail.com', 'Forest Hill');
    
    expect(answers.school).toEqual(expect.any(String));
    expect(answers.school).toEqual('Forest Hill');
  })

  it('Get Role',()=>{
    const answers = new Intern('Zak', 3, 'zak@mail.com', 'Forest Hill');

    expect(answers.getRole()).toEqual('Intern');
  })
 });