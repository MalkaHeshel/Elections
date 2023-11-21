const db = require('./db')



async function getnumbervoted() {
    
    const data = await db.query(` SELECT COUNT(voted) as num, DATE_FORMAT(electionDate, '%Y/%m/%d') as date FROM votes where voted=1 GROUP BY electionDate;`)
    console.log(data);
return data;
}


async function getnumcityvoted() {

    
    const data = await db.query('SELECT COUNT(voted) as num, city  FROM votes  join legalvoters where idvoted=id and voted=1  GROUP BY city;')
    console.log(data);
   return data
}
module.exports = {
    getnumbervoted,getnumcityvoted
}