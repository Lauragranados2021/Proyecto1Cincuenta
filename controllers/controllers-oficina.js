const { findById } = require('../models/alquiler');
const oficina=require('../models/oficina');
module.exports={
    getOficinas:async(req,res)=>{
        try{
            const result = await oficina.find({})
            return res.status(200).json({data:result})

        }catch(err){
            return res.status(500).json({err:err})

        }
    },getOneOficina:async(req,res)=>{
        try{
            const {id}=req.params;


            const result = await oficina.findById(id)
            return res.status(200).json({data:result})

        }catch(err){
            return res.status(500).json({err:err})

        }
    },
    saveOficina:async(req,res)=>{
        try{
            const ofis=new oficina(req.body)
            const saveofis=await ofis.save()
            return res.status(200).json({state:true,data:saveofis})


        }catch(err){
            return res.status(500).json({state:false,err:err})

        }
    },
    updateOficina:async(req,res)=>{
        try{
            const {id}=req.params
            const {code,name,direccion,capacidad}=req.body
            const validate=await oficina.findById(id)
            if(!validate){
                return res.status(404).json({message:'oficina no existe'})
            }

            const result=await oficina.updateOne({_id:id},{$set:{
                code,name,direccion,capacidad}
            })  
            return res.status(200).json({state:true,data:result})

        }catch(err){
            return res.status(500).json({state:false,err:err})
        }
},
deleteOficina:async(req,res)=>{
    try{
        const {id}=req.params
        
        const record=await oficina.findById(id)
        if(record){
       
            if(record.alquiler.length==0){
                const result=await oficina.findByIdAndDelete(id)
                return res.status(200).json({state:true,data:result})
            }
            else{
                return res.status(101).json({data:"oficina tiene contratos"})
            }
        }else{
            return res.status(404).json({state:false,data:"no se encontro oficina"}) 
        }
    }catch(err){
        return res.status(500).json({state:false,err:err
        })

    }
},


}