const Engineer = require("../lib/Engineer");

describe('Engineer Profile', () => {
  
  it('Check the name of Engineer result', () => {
    const answers = new Engineer('Yel', 2, 'yza@gmail.com', 'yelzaw');

    expect(answers.name).toEqual('Yel');
    });

  it('Check the result of input in Github',()=>{
    const answers = new Engineer('Yel', 2, 'yza@gmail.com', 'yelzaw');
    
    expect(answers.github).toEqual(expect.any(String));
    expect(answers.github).toEqual('yelzaw');
  })

  it('Get Role',()=>{
    const answers = new Engineer('Yel', 2, 'yza@gmail.com', 'yelzaw');

    expect(answers.getRole()).toEqual('Engineer');
  })
 });