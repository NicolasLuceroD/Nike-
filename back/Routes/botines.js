const {Router} = require ('express')
const router = Router()

const {crearBotines,verBotines,editarBotines,eliminarBotines, } = require ('../controllers/botines')


router.get('/botines', verBotines)

router.post('/botines/post', crearBotines)

router.put('/botines/put/:id_producto', editarBotines)

router.delete('/botines/delete/:id_producto', eliminarBotines)



module.exports = router;