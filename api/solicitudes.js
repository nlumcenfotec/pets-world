const express = require('express');
const mongoose = require('mongoose');
let router = express.Router();

let Solicitud = require('../schemas/solicitud');

router.get('/', (req, res) => {
    Solicitud.find().exec()
        .then(
            function (result) {
                res.json(result);
            }
        )
        .catch(err => {
            res.json({ message: err })
        });
        
});


router.post('/insertar', (req, res) => {
    var solicitudNueva = new Solicitud({
        _id: new mongoose.Types.ObjectId(),
        proveedor: req.body.proveedor,
        cliente: req.body.cliente,
        tipo: req.body.tipo,
        estado: req.body.estado,
        fecha: req.body.fecha

    });

    solicitudNueva.save()
        .then(
            result => {
                res.json(result);
            }
        )
        .catch(err => {
            res.json({ message: err })
        });

});




router.post('/buscar', (req, res) => {
    Solicitud.find({ tipo: req.body.tipo}).exec()
        .then(
            result => {
                res.json(result);
            }
        )
        .catch(err => {
            res.json({ message: err })
        });
        

});


router.post('/buscar_solicitudes_pendientes_proveedor', (req, res) => {
    Solicitud.find({ $and: 
        [
            {tipo: req.body.tipo},
            { proveedor: req.body.proveedor}, 
            { estado: req.body.estado}
        ]
    }).exec()
        .then(
            result => {
                res.json(result);
            }
        )
        .catch(err => {
            res.json({ message: err })
        });
        

});


router.post('/buscar', (req, res) => {
    Solicitud.find({ tipo: req.body.tipo}).exec()
        .then(
            result => {
                res.json(result);
            }
        )
        .catch(err => {
            res.json({ message: err })
        });
        

});




router.delete('/eliminar', (req, res) => {
    Solicitud.findOneAndDelete({ tipo: req.body.tipo }).exec()
        .then(
            result => {
                res.json(result);
            }
        )
        .catch(err => {
            res.json({ message: err })
        });
        

});





router.put('/actualizar', (req, res) => {
    let cliente = req.body.cliente;
    let proveedor = req.body.proveedor;
    let tipo = req.body.tipo;
    let estado = req.body.estado;
    let fecha = req.body.fecha;
   

    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    Solicitud.findOneAndUpdate(
        {cliente: cliente}, {$set:{
            proveedor:proveedor,
            tipo:tipo,
            estado:estado,
            fecha:fecha
        }
    }, 
        {useFindAndModify: false, new: true},  (err, doc) =>{
      res.json(doc);
    })
    .catch(err => {
        res.json({ message: err })
    });
    
  });


module.exports = router;