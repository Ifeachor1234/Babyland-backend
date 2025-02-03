require("dotenv").config();

const express = require("express");

const app = require("./app");

const connectDB = require("./db/connection");

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();
    console.log("connected to the database sucessfully");

    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("failed to connect to the database:", err.message);
    process.exit(1);
  }
};

startServer();

// ifeachorchukwudi4
// UZZUtMWvo4h0GNCy
// mongodb+srv://ifeachorchukwudi4:UZZUtMWvo4h0GNCy@cluster0.trwt8.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0

// SETUP SERVER TO RUN -> MODEL -> CONTROLLER -> ROUTER -> BACK TO APP.JS... their will other folders if neccessary
