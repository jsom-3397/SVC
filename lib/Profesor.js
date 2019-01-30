const Profesor = require("./ProfesorSchema");
exports.getProfesores = (req, res) => {
  Profesor.find((err, profesor) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(profesor);
  });
};

exports.getProfesor = (req, res) => {
  let id = req.params.id;
  Profesor.find({ _id: id }, (err, profesor) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(profesor);
  });
};

exports.newProfesor = (req, res) => {
  const newProfesor = new Profesor (req.body);
  newProfesor.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newProfesor);
  });
};

exports.updateProfesor = (req, res) => {
  let nombre = req.body.nombre;
  Profesor.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteProfesor = (req, res) => {
  Profesor.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
