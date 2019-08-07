const http = require('http');
const data = {
    firstName: 'Laurence',
    lastname: 'svekis'
}

const site = http.createServer(function(req, res) {
    console.log('Hello World');
    console.log(req.headers);
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');
    res.write(JSON.stringify(data));
    res.end();
});
site.listen(3000);