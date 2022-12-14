const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const Exam = require('./Exam');

const app = express()

const DEFAULT_PORT = 1338

mongoose.connect(
   `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.0gcr4yt.mongodb.net/?retryWrites=true&w=majority`, 
   { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
   console.log('Conected');
}).catch((err) => {
   console.log(err);
});

app.set("port", DEFAULT_PORT);
app.use(express.json());

app.listen(DEFAULT_PORT, () => {
   console.info(`Webserver is up on port ${DEFAULT_PORT}`);
});

app.get("/", (req, res) => {
   return res.status(200).json("Webserver is up!");
})

app.post('/save', async (req, res) => {
   try {
      const exam = Exam.create(req.body);
      return res.status(200).send({ exam });
   } catch (err) {
      return res.status(400).send({ error: 'Failed to save exam' });
   }
})

app.get('/pull', async (req, res) => {
   const { cpf } = req.body;
   const exams = await Exam.find({ cpf });

   if (!exams) {
      return res.status(400).send({ error: 'Failed to save exam' });
   }

   return res.status(200).send({ exams });
})