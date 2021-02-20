var data = {
    "Personal info": {
        "Name": "John Doe",
        "Email": "john.doe@gmail.com",
        "Phone": "9876543210",
        "Age": "25 years"
    },
    "Medical Condition": {
        "Heart Disease": false,
        "Diabetics": true,
        "Blood Pressure": {
            "High BP": true,
            "Low BP": false
        }
    },
    "Health Status": {
        "Height": "175 cms",
        "Weight": "65 kg",
        "Pulse Rate": "88 bpm",
        "BP": "120/160",
        "BMI": 25
    }
}


module.exports.getPatientList = (req, res, next) => {
    if (data) {
        return res.send({ 'message': 'Success', 'status': 200, data: data });
    } else {
        return res.send({ 'message': 'Failed', 'status': 400, data: [] })
    }
}

module.exports.login = (req, res, next) => {
    if (req.body.email == 'john.doe@gmail.com' && req.body.password == 'Test123') {
        return res.send({ 'message': 'Login success', status: 200 });
    } else {
        return res.send({ 'message': 'Login Failed', status: 400 });
    }
}