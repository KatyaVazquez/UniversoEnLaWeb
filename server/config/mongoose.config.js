

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/DtaBasePlanets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO DB"))
    .catch(err => console.log("ERROR WITH DB: " + err))