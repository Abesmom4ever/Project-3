
const router = require('express').Router();
const userRoutes = require('./user-routes');
const videoRoutes = require('./video-routes');

router.use('/users', userRoutes);
router.use('/videos', videoRoutes);

module.exports = router;
