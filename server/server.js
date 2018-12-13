const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        error:'Page Not Found',
        name: 'Express Test'
    });
});


app.get('/users', (req,res) => {
    res.send([{
        name:'KS', 
        age:25
    },{
        name:'SK',
        age:52
    }],
    );
});    
app.listen(3000);

module.exports.app = app;