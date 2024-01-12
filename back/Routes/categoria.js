const {Router} = require ('express')
const router = Router ()


const {todosCategoria,crearCategoria,actualizarCategoria,eliminarCategoria} = require("../controllers/categoria")



router.get("/categoria",todosCategoria)

router.post("/categoria/post", crearCategoria)

router.put("/categoria/put/:id_categoria",actualizarCategoria)

router.delete("/categoria/delete/:id_categoria",eliminarCategoria)


module.exports = router