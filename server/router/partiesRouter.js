const express = require('express');
const partyService = require('../services/partiesServices');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        let result = await partyService.getAllParties();
        res.send(result);
        console.log(result+"all")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

router.post('/', async (req, res) => {
    try{
        console.log("adddddddddddrrrrrrrrrrrrrrrrrr");
    let result = await partyService.addParty(req.body.sym, req.body.des);
    res.send(result);
    console.log(result + "all")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

router.delete('/', async (req, res) => {
    try{
        console.log("adddddddddddrrrrrrrrrrrrrrrrrr");
    let result = await partyService.deleteParty(req.body.sym);
    res.send(result);
    console.log(result + "all")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});


router.put('/:choice', async (req, res) => {
    try{
        console.log("party")
        let result = await partyService.updateparty(req.params.choice);
        res.send(result);
        console.log(result+"all")
    }
    catch (error) {
        return [500, `Internal server error: ${error}`]
    }
});

module.exports = router;