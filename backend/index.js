const express = require('express')
const app = express()

const DEFAULT_PORT = 1338

app.set("port", DEFAULT_PORT);
app.use(express.json());

app.listen(DEFAULT_PORT, () => {
   console.info(`Webserver is up on port ${DEFAULT_PORT}`);
});

app.get("/", (req, res) => {
   return res.status(200).json("Webserver is up!");
})

