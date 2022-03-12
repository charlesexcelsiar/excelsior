const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');
const settings = require('./routes/setup');
const app = express();
mongoose
    .connect('mongodb+srv://charlesexcelsior:aey4be4u@cluster0.1wy7i.mongodb.net/excelsiorDB?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful!'))
    .catch(e => {
        console.log(e);
        server.close();
    });
hbs.registerPartials("./views/partials");

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("./public"));
app.use('/', settings);




app.listen(1337, () => {
	console.log('serving on port 1337');
});