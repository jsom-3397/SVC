const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  nombre:String,
  ano:String,
  asignaura:[{
    type: Schema.Types.ObjectId,
    ref:"Asignaura"}]
});

module.exports = mongoose.model("Plan", PlanSchema);
