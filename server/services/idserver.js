const db = require('./db')



async function checkId(id) {
    
    const data = await db.query(`select * from votes where idvoted=${(id)}`);
    console.log(data)
    if (data[0] == undefined)
    return {
        isWorker: false,
        data: null,
        voted: false,
        entitledToVote: false
    };
    else {
        if (data[0].voted) {
            return {
                isWorker: false,
                data: null,
                voted: true,
                entitledToVote: true
            };
        }
        else
            return {
                isWorker: false,
                data: null,
                voted: false,
                entitledToVote: true
            };
        }
    
}


async function updatevoter(id) {

    console.log("voted")
    const data1 = await db.query(`SELECT DATE_FORMAT(electionDataDate, '%Y-%m-%d') as date  FROM elections.electiondata;`)
   
    console.log(data1);
  
    console.log(data1[0].date);
    const data = await db.query(`update elections.votes set voted=1 where idvoted='${id}' AND electionDate='${data1[0].date}'`);
    
//    console.log(data) ;
   return {voted:true}
}
module.exports = {
    checkId,updatevoter
}