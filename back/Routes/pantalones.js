const {Router} = require ('express')
const router = Router ()

const {todos,crear,editar,eliminar} = require ('../controllers/pantalones')


// Para llamar a todos los registros
router.get('/pantalones',todos)
// Para crear
router.post('/pantalones/post',crear)
//Para actualizar
router.put('/pantalones/put/:id_producto',editar)
//Para eliminar 
router.delete('/pantalones/delete/:id_producto',eliminar)

module.exports = router