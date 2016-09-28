const dgram = require('dgram');
const cliente = dgram.createSocket('udp4');

const mensagem ='Hello world!';

cliente.send(mensagem, 13000, 'localhost', (err) => {
  cliente.close();
});
