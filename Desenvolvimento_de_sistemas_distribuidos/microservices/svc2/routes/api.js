// Dependencies
var express = require('express');
var router = express.Router();
var request = require('request');

var locais = [
  {id: 1, nome: "Local 1", cidade: "Natal"},
  {id: 2, nome: "Local 2", cidade: "Parnamirim"},
  {id: 3, nome: "Local 3", cidade: "Mossoro"}
];
var maxid = 4;

router.get('/locais', function(req, res) {
    res.json(locais);
});

router.post('/locais', function(req, res) {
    var _nome = req.body.nome;
    var _cidade = req.body.cidade;
    maxid += 1;
    console.log(maxid);
    var loc = {id: maxid, nome: _nome, cidade: _cidade};
    locais = locais.concat(loc);
    if (locais.length === 4) {
      res.json({status: "ok"});
    }
});


// Return router
module.exports = router;
