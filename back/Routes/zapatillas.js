const {Router} = require ('express')
const router = Router ()


const {crear, todos, editar, eliminar, unoSolo} = require ('../controllers/zapatillas')


//Para ver uno solo
router.get('/zapatillas/get/:id_producto', unoSolo)

// Para llamar a todos los registros de las zapatillas
router.get ('/zapatillas',todos);

// Para crear un zapatilla
router.post("/zapatillas/post",crear);

//Para actualizar un zapatilla
router.put("/zapatillas/put/:id_producto",editar)

//Para eliminar una zapatilla 
router.delete("/zapatillas/delete/:id_producto", eliminar)


module.exports = router;