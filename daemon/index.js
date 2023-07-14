const express = require("express");
const app = express();
const PORT = 3005;

import mongoose from 'mongoose';
import config from 'config/config.js';

app.use(express.json());


app.listen(PORT, () => {
    console.log(
        `Server PORT : ${PORT} ... `
    );
});

