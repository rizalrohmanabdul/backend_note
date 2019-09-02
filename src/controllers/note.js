const noteModel = require("../models/note");
const help = require("../helpers/helpers");

module.exports = {
  getNoteALL: (req, res) => {
    noteModel
      .getNoteALL()
      .then(result=> {
        help.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  postNote: (req, res) => {
    const data = {
      title: req.body.title,
      description: req.body.description,
      id_cat: req.body.id_cat,
      
    };
    noteModel
      .postNote(data)
      .then(resultPattern => {
        const result = resultPattern;
        help.response(res, result, 200, data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  updateNote: (req, res) => {
    const id_note = req.params.id_note;
    const data = {
      title: req.body.title,
      description: req.body.description,
      id_cat: req.body.id_cat,
      updated_at: req.body.updated_at
    };
    noteModel
      .updateNote(id_note)
      .then(result => {
        help.response(res, result, 200, data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getPatternNow: (req, res) => {
    patternModel
      .getPatternNow()
      .then(resultPattern => {
        help.response(res, resultPattern, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  insertPattern: (req, res) => {
    const data = {
      pattern_type: req.body.pattern_type,
      combo_lengt: req.body.combo_lengt,
      status: 0
    };
    patternModel
      .insertPattern(data)
      .then(resultPattern => {
        const result = resultPattern;
        help.response(res, result, 200, data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  
  deleteUser: (req, res) => {
    const id_ktp = req.params.id_ktp;

    userModel
      .deleteUser(id_ktp)
      .then(resultUser => {
        const result = resultUser;
        help.response(res, result, 200, id_ktp);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
