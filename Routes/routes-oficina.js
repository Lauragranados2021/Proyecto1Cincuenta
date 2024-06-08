const routes=require('express').Router()
const{
    getOficinas,getOneOficina,saveOficina,updateOficina,deleteOficina
}=require('../controllers/controllers-oficina')
routes.get('/',getOficinas)
routes.post('/',saveOficina)
routes.put('/:id',updateOficina)
routes.delete('/:id',deleteOficina)
routes.get('/:id',getOneOficina)
module.exports = routes;