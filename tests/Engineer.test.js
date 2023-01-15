const Manager = require("../lib/Manager");

describe('Engineer Profile', () => {
  
  it('After user filled the data, export HTML codes', () => {
    const answers = { name: 'Elvan', id: '1', email: 'elvan@gmail.com', office: '234' };
    const resultHTML =
    `<div class="card">
        <div class="card-header">
                <h2 class="card-title">Elvan</h2>
                <h3 class="card-title">Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">Email:<a href="mailto:elvan@gmail.com:">elvan@gmail.com</a></li>
                <li class="list-group-item">Office number:234</li>
            </ul>
        </div>
        </div>
        `
      const resultFinal = new Manager().generateManager(answers);

      expect(resultFinal).toEqual(resultHTML);
    });
 });