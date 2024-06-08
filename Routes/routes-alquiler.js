const routes=require('express').Router()
const{
    getAlquiler,saveAlquiler
}=require('../controllers/controllers-alquiler')
routes.get('/',getAlquiler)
routes.post('/:id',saveAlquiler)
module.exports = routes;