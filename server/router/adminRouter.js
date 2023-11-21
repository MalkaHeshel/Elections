const express = require('express');
const adminService = require('../services/adminserver');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        console.log('get user')
    let result = await adminService.employeesall();
    res.send(result);
    console.log(result+"all")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
    
});

router.get('/positions', async (req, res) => {
    try{
        console.log('get user')
        let result = await adminService.getposition();
        res.send(result);
        console.log(result + "all")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

router.post('/position', async (req, res) => {
    try{
        let result = await adminService.addposition(req.body.positioname,req.body.code);
        console.log("addprrrrrrrrrrrrr")
        res.send(result);
        console.log(result+"all")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

router.post('/addemployee', async (req, res) => {
    try{
        console.log('get user')

        console.log('get userpppppppp')
        let result = await adminService.addemployee(req.body.position,req.body.idworker,req.body.name);
        console.log(result+"all")
        res.send(result);
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});
module.exports = router;