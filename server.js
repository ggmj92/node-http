const http = require('node:http');
const data = require('./data');

const server = http.createServer((req, res) => {
    console.log('Request Received!');
    res.end(`
    <!DOCTYPE html>
        <html>
            <head>
                <title>${data.title}</title>
            </head>
            <body>
                <h1>${data.subtitle}</h1>
                <p>${data.description}</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log(`Server listening on port: http://localhost:${server.address().port}`);
});