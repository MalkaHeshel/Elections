const db = require('./db')

async function getAllParties() {
    console.log("all")
    const data = await db.query(`SELECT * FROM parties `);
    debugger
    console.log("all")
    console.log(data);
    return data;
}

async function updateparty(party) {
    console.log("voted")
    const data1 = await db.query(`SELECT DATE_FORMAT(electionDataDate, '%Y-%m-%d') as date  FROM elections.electiondata;`)
    console.log(data1);
    console.log(data1[0].date);
    console.log("party server")
    console.log(party)
    const data = await db.query(`update parties set sum=sum+1 where primeryKeyParties=${party} AND electionDate='${data1[0].date}'`);
    debugger
    
    
}
async function addParty(symbol, des) {
    console.log("addddddddddddddddddddd")
    const data = await db.query(`insert into elections.parties values(default,0,'${des}','${symbol}');`);
}


async function deleteParty(symbol) {
    console.log("addddddddddddddddddddd")
    const data = await db.query(`delete from  elections.parties where onNote='${symbol}'`);
}

module.exports = {
    getAllParties, updateparty, addParty, deleteParty
}