const router = require('express').Router();

const appareil = require('../../controllers/appareil.controller');

router.get('/', (req, res) => res.json({ message: 'Welcome to SmartConsumer API' }));

// Appareils routes
router.post('/appareils', appareil.create);
router.get('/appareils', appareil.findAll);
router.get('/appareils/:appareilsId', appareil.findOne);
router.put('/appareils/:appareilsId', appareil.update);
router.delete('/appareils/:appareilsId', appareil.delete);

module.exports = router;
