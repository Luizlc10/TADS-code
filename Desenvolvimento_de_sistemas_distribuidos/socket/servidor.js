//definindo funções para os eventos
function receberRequisicao(socket) {
   var processarRequisicao = function(data) {
      // escreve no log no Servidor os dados da requisição
      console.log('### cliente [' +
            this.remoteAddress + ':'+
            this.remotePort + ']');
      console.log(data.toString());
      console.log('###');

      // envia mensagem de retorno para o cliente
      this.write('--- voce escreveu ---\n')
      this.write(data.toString());
      this.write('\n---\n');

      // fecha conexão
      this.end();
   };
   socket.on('data', processarRequisicao);
}
function ligar() {
   console.log('# Servidor AGUARDANDO conexões...');
};
function desligar() {
   console.log('# Servidor DESLIGADO');
};

// cria um objeto para o socket Servidor
var server = require('net').createServer();

// define os eventos do socket Servidor
server.on('listening', ligar);
server.on('close', desligar);
server.on('connection', receberRequisicao);

// abre o socket servidor na porta 8000
server.listen(8000, function(){
  console.log("server listening to " + server.address());
});
