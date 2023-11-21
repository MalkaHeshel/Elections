const express = require('express');
const resultService = require('../services/resultService');
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
        console.log("result")
        let result = await resultService.electionResults();
        console.log(result)
        res.send(result);
        console.log(result + " results")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

module.exports = router;