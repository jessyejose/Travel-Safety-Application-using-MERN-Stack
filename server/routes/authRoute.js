const express = require('express');
const { registerUser, loginUser, userData, updateUser, verifyMail, submitForm,getAllFormData ,submitstation,getAllPoliceData,loginpoliceUser,getAllFormDatavalid,approveTrip,rejectTrip,allUser,activeTrip,submitAlert,submitAlerts,submitStatus} = require('../controllers/authController');
const authMiddleware = require('../config/authMiddleware');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/userdata", authMiddleware, userData);
router.post("/update", updateUser);
router.post("/verifymail", verifyMail);
router.post("/submit", upload.fields([{ name: 'photo' }, { name: 'signature' }]), submitForm);
router.get('/forms', authMiddleware, getAllFormData);

router.post("/policestation", upload.fields([{ name: 'headPoliceImage' }, { name: 'policeStationImage' }]), submitstation);

router.get('/policedata', getAllPoliceData);
router.get('/policedata', getAllPoliceData);

router.post('/policelogin', loginpoliceUser);

router.get('/formvalid', getAllFormDatavalid);
router.post('/approveTrip', approveTrip);
router.post('/rejectTrip', rejectTrip);

router.get('/alluser', allUser);
router.post('/viewtripbyid', activeTrip);
router.post('/submitalert', submitAlert);
router.post('/submitalerts', submitAlerts);


router.post('/submitstatus', submitStatus);







module.exports = router;