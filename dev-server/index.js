var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.post('/api/name', function (req, res) {
    var name = req.body['name'];
    var invalidNames = ['max','franz','hans','com'];

    if (invalidNames.indexOf(name) < 0) {
        res.send({ result: true });
    } else {
        res.status(400).send({ result: false });
    }
});

app.listen(9999);