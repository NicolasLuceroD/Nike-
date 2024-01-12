const {Router} = require ('express')

const router = Router()

const {todosUsuarios, crearUsuario, eliminarUsuario , actualizarUsuario} = require('../controllers/usuarios')



router.get("/usuarios", todosUsuarios)

router.post("/usuarios/post", crearUsuario)

router.put("/usuarios/put/:id_usuario", actualizarUsuario)

router.delete("/usuarios/delete/:id_usuario", eliminarUsuario)


module.exports = router;