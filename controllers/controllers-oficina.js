const oficina=require('../models/oficina');
module.exports={
    getOficinas:async(req,res)=>{
        try{
            const result = await oficina.find({})
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
}