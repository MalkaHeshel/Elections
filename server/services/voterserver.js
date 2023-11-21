const db = require('./db')
async function getusers() {
    const data = await db.query('select * from populationregistry');
    debugger
    console.log(data);
    return data;
}

module.exports = {
    getusers
}