const net = require('net');
const http = require('http');

// la liste des serveurs
const serveurs = [5000,5001,5002,5003,5004];
console.log(serveurs[Math.floor(Math.random() * serveurs.length)]);
net.createServer(function (socket) {
    console.log("connexion");
    //recuperer un serveur au hasard
    let serveur = serveurs[Math.floor(Math.random() * serveurs.length)];
}).listen(8000);



