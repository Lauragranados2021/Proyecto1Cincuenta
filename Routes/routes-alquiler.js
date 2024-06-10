const routes=require('express').Router()
const{
    getAlquiler,getOneAlquiler,saveAlquiler,updateAlquiler,deleteAlquiler
}=require('../controllers/controllers-alquiler')
/**
 * @swagger
 * /alquiler:
 *   get:
 *     summary: Lista de Alquiler
 *     description: Método que retorna todos los objetos alquiler
 *     responses:
 *       '200':
 *         description: Respuesta satisfactoria, una lista de los objetos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: array
 *                   description: Indica éxito en la consulta de los datos
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       code:
 *                         type: Number
 *                         description: Especifica el ID del contrato de alquiler
 *                         example: 8108277
 *                       ContractStartDate:
 *                         type: Date
 *                         description: Hace referencia a la fecha de inicio del contrato
 *                         example: 2021-10-10
 *                       ContractEndDate:
 *                         type: Date
 *                         description: Hace referncia a la fecha de fin de contrato
 *                         example: 2021-10-10
 *                       Price:
 *                         type: Number
 *                         description: Hace referncia al precio del contrato
 *                         example: 690000
 *                       oficina:
 *                        type: object
 *                        description: Hace referencia a la oficina que se esta alquilando
 *                        example: {_id: '615f3b3b7b3b3b3b3b3b3b3b'}
 *  
 *       '500':
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   example: Error interno del servidor
 */
routes.get('/',getAlquiler)
/**
 * @swagger
 * /alquiler/{id}:
 *   post:
 *     summary: Crea un nuevo alquiler para una oficina
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id de la oficina
 *     requestBody:
 *       description: Inserta un nuevo registro de alquiler
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Code:
 *                 type: Number
 *                 description: Id del contrato
 *                 example: 2345
 *               ContractStartDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del contrato
 *                 example: "2022-01-01"
 *               ContractEndDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de fin del contrato
 *                 example: "2022-12-31"
 *               Price:
 *                 type: Number
 *                 description: Precio del contrato
 *                 example: 690000
 *     responses:
 *       '200':
 *         description: SUCCESS
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   description: Estado de la operación
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: ID del alquiler en la base de datos
 *                       example: 615f3b3b7b3b3b3b3b3b3b3b
 *                     code:
 *                       type: Number
 *                       description: Id del contrato
 *                       example: 2345
 *                     ContractStartDate:
 *                       type: string
 *                       format: date
 *                       description: Fecha de inicio del contrato
 *                     ContractEndDate:
 *                       type: string
 *                       format: date
 *                       description: Fecha de fin del contrato
 *                     price:
 *                        type: Number
 *                        description: Precio del contrato
 *                        example: 600000
 *                                           
 *       '400':
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Detalle del error
 *                   example: "La fecha de inicio no puede ser mayor a la fecha de fin"
 *       '404':
 *         description: Oficina no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Detalle del error
 *                   example: "oficina no Existe"
 *       '500':
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   description: Estado de la operación
 *                   example: false
 *                 err:
 *                   type: string
 *                   description: Detalle del error
 *                   example: Error interno del servidor
 */
routes.post('/:id',saveAlquiler)
/**
 * @swagger
 * /alquiler/{id}:
 *   put:
 *     summary: Actualiza un contrato
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id del contrato a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: number
 *                 description: Código del contrato
 *                 example: 1
 *               ContractStartDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del contrato
 *                 example: "2022-01-01"
 *               ContractEndDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de fin del contrato
 *                 example: "2022-12-31"
 *               price:
 *                 type: number
 *                 description: Precio del contrato
 *                 example: 1000
 *               oficinasId:
 *                 type: string
 *                 description: Id de la oficina asociada al contrato
 *                 example: "8108277"
 *     responses:
 *       200:
 *         description: Contrato actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: number
 *                       example: 1
 *                     ContractStartDate:
 *                       type: string
 *                       format: date
 *                       example: "2022-01-01"
 *                     ContractEndDate:
 *                       type: string
 *                       format: date
 *                       example: "2022-12-31"
 *                     price:
 *                       type: number
 *                       example: 1000
 *                     oficinasId:
 *                       type: string
 *                       example: "8108277"
 *       404:
 *         description: Contrato no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Contrato no existe"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   example: false
 *                 err:
 *                   type: string
 *                   example: "Error message"
 */

routes.put('/:id',updateAlquiler) 
/**
 * @swagger
 * /alquiler/{id}:
 *   delete:
 *     summary: Elimina un alquiler
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id del alquiler a eliminar
 *     responses:
 *       200:
 *         description: Alquiler eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "8108277"
 *                     code:
 *                       type: number
 *                       example: 1
 *                     ContractStartDate:
 *                       type: string
 *                       format: date
 *                       example: "2022-01-01"
 *                     ContractEndDate:
 *                       type: string
 *                       format: date
 *                       example: "2022-12-31"
 *                     price:
 *                       type: number
 *                       example: 1000
 *                     oficinasId:
 *                       type: string
 *                       example: "8108277"
 *       404:
 *         description: Alquiler no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Alquiler no existe"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   example: false
 *                 err:
 *                   type: string
 *                   example: "Error message"
 */

routes.delete('/:id',deleteAlquiler)
/**
 * @swagger
 * /alquiler/{id}:
 *   get:
 *     summary: Obtiene un alquiler por su id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id del alquiler a obtener
 *     responses:
 *       200:
 *         description: Alquiler obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "8108277"
 *                     code:
 *                       type: number
 *                       example: 1
 *                     ContractStartDate:
 *                       type: string
 *                       format: date
 *                       example: "2022-01-01"
 *                     ContractEndDate:
 *                       type: string
 *                       format: date
 *                       example: "2022-12-31"
 *                     price:
 *                       type: number
 *                       example: 1000
 *                     oficinasId:
 *                       type: string
 *                       example: "8108277"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   example: "Error message"
 */

routes.get('/:id',getOneAlquiler)
module.exports = routes;