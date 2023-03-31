const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const commentsRouter = require('./routes/comment.route');


const app = express();
app.use(express.json());




app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173"
    })
)


require("./config/mongoose.config");


app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cookieParser());

const myRoutes = require("./routes/user.routes");

app.use('/api', commentsRouter);


myRoutes(app);


app.listen(8000, () => console.log("SERVER LOADED"));
