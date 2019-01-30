const Asignatura = require("./AsignaturaSchema");
exports.getAsignaturas = (req, res) => {
  Asignatura.find((err, asignaura) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(asignaura);
  });
};

exports.getAsignatura = (req, res) => {
  let id = req.params.id;
  Asignatura.find({ _id: id }, (err, asignatura) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(asignatura);
  });
};

exports.newAsignatura = (req, res) => {
  const newAsignatura = new Asignatura (req.body);
  newAsignatura.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newAsignatura);
  });
};

exports.updateAsignatura = (req, res) => {
  let nombre = req.body.nombre;
  Asignatura.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteAsignatura = (req, res) => {
  Asignatura.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
