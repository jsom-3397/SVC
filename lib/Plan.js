const Plan = require("./PlanSchema");
exports.getPlanes = (req, res) => {
  Plan.find((err, plan) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(plan);
  });
};

exports.getPlan = (req, res) => {
  let id = req.params.id;
  Plan.find({ _id: id }, (err, plan) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(plan);
  });
};

exports.newPlan = (req, res) => {
  const newPlan = new Plan (req.body);
  newPlan.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newPlan);
  });
};

exports.updatePlan = (req, res) => {
  let nombre = req.body.nombre;
  Plan.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deletePlan = (req, res) => {
  Plan.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
