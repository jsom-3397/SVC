express = require("express");
mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
  .connect(
    "mongodb+srv://admin:jsom_3397@cluster0-aojan.mongodb.net/apilingdb?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var asignatura = require("./lib/Asignatura");

app.get("/asignaturas", (req, res) => {
  asignatura.getAsignaturas(req, res);
});

app.get("/asignaturas/:id", (req, res) => {
  asignatura.getAsignatura(req, res);
});

app.post("/asignaturas", (req, res) => {
  asignatura.newAsignatura(req, res);
});

app.put("/asignaturas/:id", (req, res) => {
  asignatura.updateAsignatura(req, res);
});

app.delete("/asignaturas/:id", (req, res) => {
  asignatura.deleteAsignatura(req, res);
});

var plan = require("./lib/Plan");

app.get("/planes", (req, res) => {
  plan.getPlanes(req, res);
});

app.get("/planes/:id", (req, res) => {
  plan.getPlan(req, res);
});

app.post("/planes", (req, res) => {
  plan.newPlan(req, res);
});

app.put("/planes/:id", (req, res) => {
  plan.updatePlan(req, res);
});

app.delete("/planes/:id", (req, res) => {
  plan.deletePlan(req, res);
});

var profesor = require("./lib/Profesor");

app.get("/profesores", (req, res) => {
  profesor.getProfesores(req, res);
});

app.get("/profesores/:id", (req, res) => {
  profesor.getProfesor(req, res);
});

app.post("/profesores", (req, res) => {
  profesor.newProfesor(req, res);
});

app.put("/profesores/:id", (req, res) => {
  profesor.updateProfesor(req, res);
});

app.delete("/profesores/:id", (req, res) => {
  profesor.deleteProfesor(req, res);
});

// escuchamos
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
