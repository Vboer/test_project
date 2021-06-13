const https = require ("https");


const options = {
    host: 'api.nasa.gov',//jsonplaceholder.typicode.com',
    path: '/planetary/apod?api_key=DEMO_KEY',
    method: 'GET'
}

const req = https.request(options, res => {
 console.log(`STATUS: ${res.statusCode}`);
   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
   res.setEncoding('utf8');
   res.on('data', (chunk) => {
     console.log(`BODY: ${chunk}`);
   });
   res.on('end', () => {
     console.log('No more data in response.');
   });
 });
 
 req.on('error', (e) => {
   console.error(`problem with request: ${e.message}`);
 });

req.end();
