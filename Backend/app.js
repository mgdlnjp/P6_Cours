const express = require("express");

const mongoose = require("mongoose");

const Thing = require("./models/Thing");

const stuffRoutes = require("./routes/stuff");

const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");

mongoose
  .connect(
    "mongodb+srv://magdeleinejpierre:Openclassrooms@cluster0.ykcu8qz.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  console.log("CROS");

  next();
});

app.use(bodyParser.json());

app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
