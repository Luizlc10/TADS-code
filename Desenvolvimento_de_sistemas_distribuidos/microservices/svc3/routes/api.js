// Dependencies
var express = require('express');
var request = require('request');
var router = express.Router();

var partidas = [
  {id: 1, nome: "partida 1",
    jogadores: [{id: 4, nome: "Eduardo"}],
    local: [{id: 4, nome: "Local 4", local: "Natal"}]},
];

// router.get('/partidas', function(req, res) {
//     res.json(partidas);
// });

router.get('/partidas', function(req, res) {
    // var _jogador = req.body.jogador;
    // var _local = req.body.local;

    var jogadores;
    var locais;

    request.get('http://localhost:3000/api/jogadores',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.log("get jogadores by 3000: ok \n";
                jogadores = body;
            }
        }
    );
    request.get('http://localhost:4000/api/locais',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.log("get locais by 4000: ok \n";
                locais = body;
            }
        }
    );

    res.json("\n" + jogadores + "\n" + locais);

});
// router.post('/soma', function(req, res) {
//     var n1 = req.body.n1;
//     var n2 = req.body.n2;
//     var soma = n1 + n2;
//     res.json({soma: soma});
// });


// Return router
module.exports = router;
