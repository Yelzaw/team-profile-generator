const Intern = require("../lib/Intern")

describe('Intern Profile', () => {
  
  it('After filled the data, new Engineer will add to profile', () => {
    const answers = new Engineer('Yel', '2', 'yza@gmail.com', 'yelzaw');

    expect(answers.name).toEqual('Yel');
    });

  it('Check the result of input in Github',()=>{
    const answers = new Engineer('Yel', '2', 'yza@gmail.com', 'yelzaw');
    
    expect(answers.github).toEqual(expect.any(String));
    expect(answers.github).toEqual('yelzaw');
  })

  it('Get Role',()=>{
    const answers = new Engineer('Yel', '2', 'yza@gmail.com', 'yelzaw');

    expect(answers.getRole()).toEqual('Engineer');
  })
 });