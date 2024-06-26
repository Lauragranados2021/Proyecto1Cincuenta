const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const path=require('path')
const swaggerUi = require('swagger-ui-express');
const {swaggerSpec,options}= require('./swagger')

require('./drivers/connect-db')
const app=express()
app.use('/api-docs',
    express.static(path.join(__dirname,'./swagger.js')),
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec,options))
app.set('PORT',process.env.PORT||3001)
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
app.use(express.json())
app.use('/oficinas',require('./Routes/routes-oficina'))
app.use('/alquiler',require('./Routes/routes-alquiler'))
app.listen(app.get('PORT'),()=>console.log(`server list at port ${app.get('PORT')}`))