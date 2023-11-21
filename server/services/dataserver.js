const db = require('./db')



async function getdata() {
    
    const data = await db.query(`SELECT DATE_FORMAT(electionDataDate, '%d/%m/%Y') as date,electionDataEndTime,electionDataStartTime,electionDataCurrentElection FROM elections.electiondata;`);
    console.log(data)
   return data;
    
}
async function getDate()
{

    const data = await db.query(`select DATE_FORMAT(electionDataDate, '%Y-%m-%d') as date from electiondata
    where idElectionData = (select max(idElectionData) from electiondata)`);
    console.log(data)
   return data[0];

}


async function getYear()
{

    const data = await db.query(`  select electionDataCurrentElection FROM elections.electiondata where idElectionData = (select max(idElectionData) from electiondata);`);
    console.log(data)
   return data;

}

async function addelection(date, startTime, endTime, numberKnesset) {
    
     await db.query(`insert into electiondata values(default,'${date}','${startTime}' , '${endTime}', ${numberKnesset});`)
await db.query(` insert into  elections.legalvoters select *from elections.populationregistry where dateofbirth <='${date}';`)
await db.query(`insert into votes(idvoted, voted,electionDate)
select id, 0, (select electionDataDate FROM electiondata where idElectionData = (select max(idElectionData) from electiondata) from legalvoters;`)
}
module.exports = {
    getdata,getDate, addelection,getYear
}