const routes=require('express').Router()
const{
    getOficinas,saveOficina
}=require('../controllers/controllers-oficina')
routes.get('/',getOficinas)
routes.post('/',saveOficina)
module.exports = routes;