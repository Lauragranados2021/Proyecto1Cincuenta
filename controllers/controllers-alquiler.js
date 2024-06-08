const alquiler = require("../models/alquiler");
const oficina = require("../models/oficina");
module.exports = {
  getAlquiler: async (req, res) => {
    try {
      const result = await alquiler.find({});
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  saveAlquiler: async (req, res) => {
    try {
      const { id } = req.params;
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
};
