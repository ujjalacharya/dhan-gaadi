const router = require('express').Router();
const { requireSuperadminSignin, requireOwnerSignin } = require('../controllers/auth-owner');
const { addLocation, getLocations } = require('../controllers/location');

router
	.route('/')
	.get(requireOwnerSignin, getLocations)
	.post(requireSuperadminSignin, addLocation);

module.exports = router;
