const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use('/',require('./routes/authRoutes'));


app.listen(8000,() => {
    console.log("Server is Connected")
})
