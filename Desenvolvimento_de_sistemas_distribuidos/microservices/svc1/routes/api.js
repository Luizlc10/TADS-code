// Dependencies
var express = require('express');
var router = express.Router();
var request = require('request');

var jogadores = [
  {id: 1, nome: "Luiz"},
  {id: 2, nome: "Matheus"},
  {id: 3, nome: "Renato"},
];
var maxid = 4;

router.get('/jogadores', function(req, res) {
    res.json(jogadores);
});

router.post('/jogadores', function(req, res) {
  var _nome = req.body.nome;
  maxid += 1;
  console.log(maxid);
  var jog = {id: maxid, nome: _nome};
  jogadores = jogadores.concat(jog);
  if (jogadores.length === 4) {
    res.json({status: "ok"});
  }
});

// Return router
module.exports = router;
