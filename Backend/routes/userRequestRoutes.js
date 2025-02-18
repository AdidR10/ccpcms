const express = require('express');
const router = express.Router();
const userRequestController = require('../controllers/userRequestController');
const auth = require('../middleware/auth');


router.post('/signup', userRequestController.signupUserRequests);

router.get('/',auth, userRequestController.getAllUserRequests);
router.get('/:userRequestId', auth, userRequestController.approveUserRequest);
router.delete('/:userRequestId', auth, userRequestController.deleteUserRequest);

module.exports = router;