electionResults

const db = require('./db')



async function electionResults() {
    const data = await db.query(' SELECT sum, name, onNote FROM elections.parties')
    return data;
}

module.exports = {
    electionResults
}