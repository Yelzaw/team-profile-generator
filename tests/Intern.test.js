const Intern = require("../lib/Intern")

describe('Intern Profile', () => {

    it('After user filled the data, export HTML codes', () => {
    const answers = { name: 'Zaki', id: '3', school: 'Forest Hill' };
    const resultHTML =
`<div class="card col-3">
<div class="card-header team-member">
<h2 class="card-title">Zaki</h2>
<h3 class="card-title">Intern</h3>
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item">ID: 3</li>
<li class="list-group-item">School:Forest Hill</li>
</ul>
</div>
</div>
`
    const resultFinal = new Intern().generateIntern(answers);

      expect(resultFinal).toEqual(resultHTML);
    });
 });
