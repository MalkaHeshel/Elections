const express = require('express');
const dataService = require('../services/dataserver');
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
        console.log('idddddddddddddddddddddd')
        let result = await dataService.getdata();
        console.log(result)
        res.send(result);
        console.log(result+" id")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});
router.get('/date', async (req, res) => {
    try{
        console.log('idddddddddddddddddddddd')
        let result = await dataService.getDate();
        console.log(result)
        res.send(result);
        console.log(result+" id")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});


router.get('/currentyear', async (req, res) => {
    try{
        console.log('idddddddddddddddddddddd')
        let result = await dataService.getYear();
        console.log(result)
        res.send(result);
        console.log(result+" id")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});
router.post('/', async (req, res) => {
    try{
        console.log('id')
        let result = await dataService.addelection(req.body.date, req.body.startTime, req.body.endTime, req.body.numberKnesset);
        console.log(result)
        res.send(result);
        console.log(result + " id")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});
module.exports = router;