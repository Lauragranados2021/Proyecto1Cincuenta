const express=require('express')
const morgan=require('morgan')
require('./drivers/connect-db')
const app=express()
app.set('PORT',process.env.PORT||3001)
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
app.use(express.json())
app.use('/oficinas',require('./Routes/routes-oficina'))
app.use('/alquiler',require('./Routes/routes-alquiler'))
app.listen(app.get('PORT'),()=>console.log(`server list at port ${app.get('PORT')}`))