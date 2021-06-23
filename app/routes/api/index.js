const router = require('express').Router();

const appareil = require('../../controllers/appareil.controller');

const core = require('../../core/location.js');

router.get('/', (req, res) => res.json({ message: 'Welcome to SmartConsumer API' }));

// Appareils routes
router.post('/appareils', appareil.create);
router.get('/appareils', appareil.findAll);
router.get('/appareils/nbuses', appareil.findAllNbUses);
router.post('/appareils/:appareilId/adduse', appareil.addOneUse);
router.post('/appareils/:appareilId/removeuse', appareil.removeOneUse);
router.get('/appareils/:appareilId', appareil.findOne);
router.put('/appareils/:appareilId', appareil.update);
router.delete('/appareils/:appareilId', appareil.delete);

// Location routes
router.get('/location/:locationName', core.getAppareils);

module.exports = router;
