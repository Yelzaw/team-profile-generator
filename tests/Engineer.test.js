const Engineer = require("../lib/Engineer");

describe('Engineer Profile', () => {
  
  it('After user filled the data, export HTML codes', () => {
    const answers = { name: 'Yel', id: '2', email: 'yza@gmail.com', github: 'yelzaw' };
    const resultHTML =
`<div class="card col-3">
<div class="card-header team-member">
<h2 class="card-title">Yel</h2>
<h3 class="card-title"><span class="material-symbols-outlined">build</span> Engineer</h3>
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item">ID: 2</li>
<li class="list-group-item">Email:<a href="mailto:yza@gmail.com:">yza@gmail.com</a></li>
<li class="list-group-item">Github:<a href="https://github.com/yelzaw" target="_blank">yelzaw</a></li>
</ul>
</div>
</div>
`
      const resultFinal = new Engineer().generateEngineer(answers);

      expect(resultFinal).toEqual(resultHTML);
    });
 });