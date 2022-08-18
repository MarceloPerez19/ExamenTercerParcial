//rutas para registro
const express= require('express');
const router= express.Router();
const productoContoller = require('../controlers/productoController');

//ap/producto
router.post('/', productoContoller.crearProducto);
router.get('/', productoContoller.obtenerProductos)
router.put('/:id', productoContoller.actualizarProducto)
router.get('/:id', productoContoller.obtenerProducto)
router.delete('/:id', productoContoller.eliminarProducto)

module.exports = router;