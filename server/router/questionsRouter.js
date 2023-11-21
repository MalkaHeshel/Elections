const express = require('express');
const questionsService = require('../services/questionserver');
const router = express.Router();


// router.get('/amount', async (req, res) => {
//     console.log('amount'+" router")
//     let result = await questionsService.amountquestions();
//     console.log(result)
//     res.send(result);
//     console.log(result+" id")
// });

router.get('/', async (req, res) => {
    try{
        console.log("id"+"router")
        let result = await questionsService.getquestions();
        
        res.send(result);
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

router.post('/answer', async (req, res) => {
    try{
        console.log(req.body.iduser,req.body.answers)
        console.log("compare answer")
        let result = await questionsService.comperanswer(req.body.iduser,req.body.answers);
        
        res.send(result);
    }
    
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});
module.exports = router;