const express = require('express');
const staticService = require('../services/satisticserver');
const router = express.Router();

// router.get('/', async (req, res) => {
//     console.log('get userrrrrrrrrrrrrrrrrrr')
//     let result = await idService.checkIdall();
//     console.log("in checkId")
//     res.send(result);
//     console.log(result+"all")
// });
router.get('/', async (req, res) => {
    try{
        console.log('')
        let result = await staticService.getnumbervoted();
        console.log(result)
        res.send(result);
        console.log(result+" id")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

router.get('/city', async (req, res) => {
    try{
        console.log('')
        let result = await staticService.getnumcityvoted();
        console.log(result)
        res.send(result);
        console.log(result+" id")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

module.exports = router;
