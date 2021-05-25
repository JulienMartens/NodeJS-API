const express = require('express');
const app = express();
const port = 3000;
var path = require('path');



app.use('/public', express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`App lancée sur http://localhost:${port}`);
})

app.get("/", (req, res) => {
 res.sendFile('/pages/base.html', { root: __dirname });
})

app.post("/getNexusData", (req,res)=> {
 res.json({data: req.body});
 console.log(req.body);
 res.send(req.body);
})