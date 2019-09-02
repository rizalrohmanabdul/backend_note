const express = require('express')
const Route = express.Router()

const catController = require('../controllers/category')
const Auth = require('../helpers/auth')

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads');
  }, 
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});

let upload = multer({ storage: storage }); 

Route 
  // .all('/*', Auth.authInfo)
  .get('/', catController.getCat)
  .post(`/inputcat`,upload.single('icon'), catController.postCat)
  // .get('/me/:id', userController.getUserMe)
  // .post(`/`, userController.insertUser)
  // .post(`/register`,upload.single('img_profile'), userController.registrasiUser)
  // .post(`/login`, userController.loginUser)
  // .patch(`/:id_ktp`, userController.updateUser)
  // .delete(`/:id_ktp`, userController.deleteUser)

module.exports = Route
