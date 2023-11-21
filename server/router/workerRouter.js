const express = require('express');
const workerServices = require('../services/workerServices');
const router = express.Router();

router.get('/:id/:code', async (req, res) => {
    try{
        console.log("workerrouter")
        let result = await workerServices.checkId(req.params.id,req.params.code);
        res.send(result);
        console.log(result+"all")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

module.exports = router;