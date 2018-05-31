const http = require('http');

const PORT = process.env.PORT || 5000;

http.createServer(function (req, res) {
    console.log('ecoute le port:'+PORT)
    res.write('ecoute le port:'+PORT);
    res.end();
}).listen(PORT);