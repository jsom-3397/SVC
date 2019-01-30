const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AsignaturaSchema = new Schema({
  nombre:String,
  creditos:Number,
  semestre:String,
  metodologia:String,
  profesores:[{
    type: Schema.Types.ObjectId,
    ref: "Profesor"}]
});

module.exports = mongoose.model("Asignatura", AsignaturaSchema);
