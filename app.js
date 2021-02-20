const express = require('express');
const app = express();
const cors = require('cors');
const { patientRoues } = require('./routes/patient-routes');
const bodyParser = require('body-parser');

const port = 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(patientRoues);

app.listen(port, () => console.log(`Server started at ${port}`));