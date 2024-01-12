const {Router} = require ('express')
const router = Router ()


const {crear, todos, editar, eliminar} = require ('../controllers/camisetas')




// Para llamar a todos los registros de las zapatillas
router.get ("/camisetas",todos);

// Para crear una camiseta
router.post("/camisetas/post",crear);

//Para actualizar una camiseta
router.put("/camisetas/put/:id_producto",editar)

//Para eliminar una camiseta
router.delete("/camisetas/delete/:id_producto", eliminar)


module.exports = router;