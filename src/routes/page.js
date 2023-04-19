const express = require('express');
const router = express.Router();
const path = require("path");
var list = {
    'clientes' :[]
  };
router.get('/',(req, res) => { 


    list['clientes'].splice(0, list['clientes'].length)
    res.render('creacliente');
});
router.post('/creacliente',(req, res) => { 
    const { Nombre } = req.body;
    const { Apellido } = req.body;
    const { Edad } = req.body;
    const { FechaNacimiento } = req.body;
    list.clientes.push({
        "Nombre":Nombre,
        "Apellido": Apellido,
        "Edad": Edad,
        "FechaNacimiento" : FechaNacimiento
      });
      res.render('creacliente', { list}); 

});

router.get('/kpideclientes',(req, res) => { 
    res.send(list['clientes']); 
});
router.get('/listclientes',(req, res) => { 
    console.log(req.params)
    res.send(list['clientes']); 
});
module.exports = router;  