const supertest = require("supertest");
const  {expect} = require ("chai");

const request = supertest ('https://gorest.co.in/public-api/');
var TOKEN = '99a36dd63af9a299a36dd63af9a2fcfd3e710be975011eb6ffa42916092d20d2010e701b785f1dcfd3e710be975s011eb6ffa42916092d20d2010e701b785f1d';
describe ('Users', function (){
	this.timeout(1000000);
	
	it ('users GET request', (/*done*/)=>{
	//	request
	//		.get(`users?access-token=${TOKEN}`)
	//		.end((err,res)=>{
	//			//console.log(err);s
	//			//console.log(res.body);
	//			expect(res.body.data).to.be.empty;
	//			done();
	//		})
		return request
		.get(`users?access-token=${TOKEN}`)
		.then((res) => {
			expect(res.body.data).to.not.be.empty
		})
	});
	
	it ('users GET request id', ()=>{
	  return request
	    .get(`users/1?access-token=${TOKEN}`)
	    .then(res => {
	      expect(res.body.data.id).to.eq(1)
	    })
	});

	it ('users GET request with queries', ()=>{
		const url = `users?access-token=${TOKEN}&page=5&gender=Female&status=Active`
		  return request
		    .get(url)
		    .then(res => {		    	
		    	expect(res.body.meta.pagination.page).to.eq(5);
		    	res.body.data.forEach(data => {
		    		expect(data.gender).to.eq('Female');
		    		expect(data.status).to.eq('Active');
		    	})
		    })
		});

	it ('users POST', ()=>{
		const data = {
			test:"test"
		};
		return request
			.post('users')
			.set('Authorization', 'Bearer ' + TOKEN)
			.send(data)
			.then(res=>{
				console.log(res.body)
			})
	});
});
