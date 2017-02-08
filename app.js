const express = require('express');
const app = express();
const port = process.env.PORT || 4123;
const nunjucks = require('nunjucks');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', { noCache: true });
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port, ()=> {console.log(`listening on port ${ port }`)});
