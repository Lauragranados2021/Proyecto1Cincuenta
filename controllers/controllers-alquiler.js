const alquiler = require("../models/alquiler");
const oficina = require("../models/oficina");
module.exports = {
  getAlquiler: async (req, res) => {
    try {
      const result = await alquiler.find({}).populate("oficina");
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  getOneAlquiler:async(req,res)=>{
    try{
        const {id}=req.params;
        const result = await alquiler.findById(id).populate('oficina')
        return res.status(200).json({data:result})
    }catch(err){
      console.log(err)
        return res.status(500).json({err:err})

    }
},
  saveAlquiler: async (req, res) => {
    try {
      const { id } = req.params;
      const { ContractStartDate, ContractEndDate } = req.body;
      const ContractinicioDate = new Date(ContractStartDate);
      const ContractfinDate = new Date(ContractEndDate);
      if (ContractinicioDate > ContractfinDate) {
        return res.status(400).json({
          message: "La fecha de inicio no puede ser mayor a la fecha de fin",
        });
      }
      const result = new alquiler(req.body);
      const ofici = await oficina.findById(id);
      if (ofici) {
        result.oficina = id;
        ofici.alquiler.push(result._id);
        const alqui = await result.save();
        await ofici.save();
        return res.status(200).json({ state: true, data: alqui });
      } else {
        return res.status(404).json({ message: "oficina no Existe" });
      }
    } catch (err) {
      return res.status(500).json({ state: false, err: err });
    }
  },
  updateAlquiler: async (req, res) => {
    try {
      const { id } = req.params;
      const { code, ContractStartDate, ContractEndDate, price, oficinasId } = req.body;
      const ContractinicioDate = new Date(ContractStartDate);
      const ContractfinDate = new Date(ContractEndDate);
  
      if (ContractinicioDate > ContractfinDate) {
        return res.status(400).json({
          message: "La fecha de inicio no puede ser mayor a la fecha de fin",
        });
      }
  
      const alquilers = await alquiler.findById(id); // Usa el modelo Alquiler para encontrar por ID
  
      if (alquilers) {
        const oficinas = await oficina.findById(oficinasId); // Usa el modelo Oficina para encontrar por ID
        if (oficinas) {
          // Encuentra la oficina antigua y elimina el alquiler de su lista
          const oldOficina = await oficina.findById(alquilers.oficina);
          if (oldOficina) {
            const index = oldOficina.alquiler.indexOf(id);
            if (index > -1) {
              oldOficina.alquiler.splice(index, 1);
              await oldOficina.save();
            }
          }
  
          // Encuentra la nueva oficina y agrega el alquiler a su lista
          const newOficina = await oficina.findById(oficinasId);
          if (newOficina) {
            newOficina.alquiler.push(id);
            await newOficina.save();
  
            // Actualiza el alquiler
            alquilers.code = code;
            alquilers.ContractStartDate = ContractStartDate;
            alquilers.ContractEndDate = ContractEndDate;
            alquilers.price = price;
            alquilers.oficina = oficinasId; // Asegúrate de actualizar la referencia de oficina
            const updatedAlquiler = await alquilers.save();
  
            return res.status(200).json({ state: true, data: updatedAlquiler });
          }
        } else {
          return res.status(404).json({ message: "Oficina no existe" });
        }
      } else {
        return res.status(404).json({ message: "Contrato no existe" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ state: false, err: err });
    }
  },
  deleteAlquiler:async(req,res)=>{
    try{
        const {id}=req.params
        const alqui=await alquiler.findById(id);
        if(alqui){
            const ofic=await oficina.findById(alquiler.oficina)
            if(ofic){
                const i=ofic.alquiler.indexOf(id)
                if(i>-1){
                    ofic.alquiler.splice(i,1)
                    await ofic.save()
                }

            }
            const result=await alquiler.findByIdAndDelete(id)
            return res.status(200).json({state:true,data:result})
        }
        else{
            
            return res.status(404).json({ message: "Alquiler no existe" });
        }    

    }catch(err){
        console.log(err)
        return res.status(500).json({state:false,err:err})

    }
}
}