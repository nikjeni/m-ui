const router = require('express').Router();
const patientController = require('../controller/patient-controller');

router.get('/getPatientHealthInfo', patientController.getPatientList);
router.post('/login', patientController.login);

module.exports.patientRoues = router;