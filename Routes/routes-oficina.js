const routes=require('express').Router()
const{
    getOficinas,getOneOficina,saveOficina,updateOficina,deleteOficina
}=require('../controllers/controllers-oficina')
/**
 * @swagger
 * /oficinas:
 *   get:
 *     summary: Obtiene la lista de oficinas
 *     description: Retorna un objeto de oficinas
 *     responses:
 *       '200':
 *         description: Una lista de oficinas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Oficina'
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
 *
 * components:
 *   schemas:
 *     Oficina:
 *       type: object
 *       properties:
 *         code:
 *           type: integer
 *           description: El ID de la oficina
 *           example: 1234
 *         nombre:
 *           type: string
 *           description: El nombre de la 
 *           example: oficina 306
 *         direccion:
 *           type: string
 *           description: La dirección de la oficina
 *           example: Calle 123
 *         capacidad:
 *           type: integer
 *           description: La capacidad de personas en la oficina
 *           example: 40
 */
routes.get('/',getOficinas)
/**
 * @swagger
 * /oficinas:
 *   post:
 *     summary: Crea una nueva oficina
 *     requestBody:
 *       description: Inserta un nuevo registro de oficina
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: Id de la oficina
 *                 example: 8108277
 *               nombre:
 *                 type: string
 *                 description: Nombre de la oficina
 *                 example: Oficina Central
 *               direccion:
 *                 type: string
 *                 description: Dirección de la oficina
 *                 example: Calle 123
 *               capacidad:
 *                 type: integer
 *                 description: Capacidad de personas en la oficina
 *                 example: 40
 *     responses:
 *       '200':
 *         description: SUCCESS
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la oficina
 *                   example: 8108277
 *                 nombre:
 *                   type: string
 *                   description: Nombre de la oficina
 *                   example: Oficina Central
 *                 direccion:
 *                   type: string
 *                   description: Dirección de la oficina
 *                   example: Calle 123
 *                 capacidad:
 *                   type: integer
 *                   description: Capacidad de personas en la oficina
 *                   example: 40
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
routes.post('/',saveOficina)
/**
 * @swagger
 * /oficinas/{id}:
 *   put:
 *     summary: Actualiza una oficina
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id de la oficina a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: Number
 *                 description: Código de la oficina
 *                 example: 1
 *               name:
 *                 type: string
 *                 description: Nombre de la oficina
 *                 example: "Oficina Central"
 *               direccion:
 *                 type: string
 *                 description: Dirección de la oficina
 *                 example: "Calle 123"
 *               capacidad:
 *                 type: integer
 *                 description: Capacidad de personas en la oficina
 *                 example: 40
 *     responses:
 *       200:
 *         description: Oficina actualizada exitosamente
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
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "Oficina Central"
 *                     direccion:
 *                       type: string
 *                       example: "Calle 123"
 *                     capacidad:
 *                       type: integer
 *                       example: 40
 *       404:
 *         description: Oficina no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "oficina no existe"
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
routes.put('/:id',updateOficina)
/**
 * @swagger
 * /oficinas/{id}:
 *   delete:
 *     summary: Elimina una oficina
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id de la oficina a eliminar
 *     responses:
 *       200:
 *         description: Oficina eliminada exitosamente
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
 *                       type: integer
 *                       example: 81
 *                     nombre:
 *                       type: string
 *                       example: "Oficina Central"
 *                     direccion:
 *                       type: string
 *                       example: "Calle 123"
 *                     capacidad:
 *                       type: integer
 *                       example: 40
 *       101:
 *         description: La oficina tiene contratos asociados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "oficina tiene contratos"
 *       404:
 *         description: Oficina no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: string
 *                   example: "no se encontro oficina"
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

routes.delete('/:id',deleteOficina)
/**
 * @swagger
 * /oficinas/{id}:
 *   get:
 *     summary: Obtiene una oficina por su id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id de la oficina a obtener
 *     responses:
 *       200:
 *         description: Oficina obtenida exitosamente
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
 *                       type: Number
 *                       example: 4
 *                     nombre:
 *                       type: string
 *                       example: "Oficina Central"
 *                     direccion:
 *                       type: string
 *                       example: "Calle 123"
 *                     capacidad:
 *                       type: integer
 *                       example: 40
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

routes.get('/:id',getOneOficina)
module.exports = routes;