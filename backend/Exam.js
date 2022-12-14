const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
   tshUltraSensivel: {
      type: Number
   },
   triglicerides: {
      type: Number
   },
   tQuatroLivre: {
      type: Number
   },
   plaquetas: {
      type: Number
   },
   leucocitos: {
      type: Number
   },
   creatinina: {
      type: Number
   },
   indiceDeSaturacaoDaTransferrina: {
      type: Number
   },
   hemoglobina: {
      type: Number
   },
   hemacias: {
      type: Number
   },
   glicemia: {
      type: Number
   },
   colesterolVLDL: {
      type: Number
   },
   colesterolTotal: {
      type: Number
   },
   colesterolNaoLDL: {
      type: Number
   },
   colesterolLDL: {
      type: Number
   },
   colesterolHDL: {
      type: Number
   },
   cpf: {
      type: String,
      required: true
   }
});

const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;