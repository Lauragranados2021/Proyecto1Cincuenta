const mongoose=require('mongoose')
const URL="mongodb+srv://lauragranados05:9jWU1U8UY4koMDSY@cluster0.pfqlkr6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test"
mongoose.set('strictQuery')
mongoose.connect(URL)
    .then(()=>console.log('Connect Succes'))
.catch(err=>console.log(err))
module.exports=mongoose