const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfesorSchema = new Schema({
  nombres:String,
  apellidos:String,
  identificacion:String,
  asignaturas:[{
    type: Schema.Types.ObjectId,
    ref: "Asignatura"}]
});

module.exports = mongoose.model("Profesor", ProfesorSchema);
