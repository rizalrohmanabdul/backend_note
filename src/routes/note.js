const express = require("express");
const Route = express.Router();

const noteController = require("../controllers/note");
const Auth = require("../helpers/auth");

Route
  .get("/", noteController.getNoteALL)
  .post(`/`, noteController.postNote)
  // .patch(`/:id_pattern`, noteController.updatePattern)

//   .patch(`/:id_ktp`, noteController.updateUser)
//   .delete(`/:id_ktp`, noteController.deleteUser)

module.exports = Route;
