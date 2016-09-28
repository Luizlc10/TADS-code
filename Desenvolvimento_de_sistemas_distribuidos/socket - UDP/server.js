const dgram = require('dgram');
const servidor = dgram.createSocket('udp4');

servidor.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  servidor.close();
});

servidor.on('message', (msg, rinfo) => {
  // rinfo = informação do endereço remoto
  console.log(`Mensagem recebida: \n\n ${msg} \n\n De: ${rinfo.address}:${rinfo.port}`);
});

servidor.on('listening', () => {
  var address = servidor.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

servidor.bind(13000);
// server listening 0.0.0.0:13000
