const express = require('express');
const votersService = require('../services/voterserver');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        console.log('get user')
        let result = await votersService.getusers();
       res.send(result);
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

// router.get('/:id', (req, res) => {
//     res.send(`period id:${req.params.id}`);
// });

// router.post('/', (req, res) => {
//     res.send('got new period type')
// });

 module.exports = router;
