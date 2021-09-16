const express = require('express');
const PORT = 3000;
const server = express();
server.get('/', function(req, res){
	res.send("Hello world!");
})
.listen(PORT, () => console.log("Listening on PORT " + PORT));
