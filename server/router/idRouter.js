const express = require('express');
const idService = require('../services/idserver');
const router = express.Router();

// router.get('/', async (req, res) => {
//     console.log('get userrrrrrrrrrrrrrrrrrr')
//     let result = await idService.checkIdall();
//     console.log("in checkId")
//     res.send(result);
//     console.log(result+"all")
// });
router.get('/:id', async (req, res) => {
    try{
        console.log('idddddddddddddddddddddd')
        let result = await idService.checkId(req.params.id);
        console.log(result)
        res.send(result);
        console.log(result+" id")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

router.put('/:id', async (req, res) => {
    try{
        console.log("id+put")
        let result = await idService.updatevoter(req.params.id);
       
        res.send(result);
        console.log(result+" id")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});



 module.exports = router;
