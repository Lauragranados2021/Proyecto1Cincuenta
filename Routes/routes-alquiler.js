const routes=require('express').Router()
const{
    getAlquiler,getOneAlquiler,saveAlquiler,updateAlquiler,deleteAlquiler
}=require('../controllers/controllers-alquiler')
routes.get('/',getAlquiler)
routes.post('/:id',saveAlquiler)
routes.put('/:id',updateAlquiler) 
routes.delete('/:id',deleteAlquiler)      
routes.get('/:id',getOneAlquiler)
module.exports = routes;