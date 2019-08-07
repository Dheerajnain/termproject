/*const http = require('http');
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
site.listen(3000);*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    console.log("I'm in the middle")
    next();
})
app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>')
})
app.post('/', function(req, res) {
    console.log(req.body.username);
    console.log(req.body.password);
    res.send('post')
})
app.put('/', function(req, res) {
    res.send('this is put')
})
app.delete('/', function(req, res) {
    res.send('this is delete')
})
app.listen(3000)