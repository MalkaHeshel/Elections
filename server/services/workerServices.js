const db = require('./db')

async function checkId(id,code) {
    console.log("Id")
    const data = await db.query(`SELECT * FROM (workers
        join position on workers.position=position.numberfoposition)
         where idworker=${id} and  code=${code}
        `);
    debugger
    console.log("Id")
    console.log(data[0])
    if (data[0] ==null) {
        return {
            isWorker: false,
            data: data3[0],
            voted: false,
        };
    }
    else if (data[0].position > 0) {
        console.log(data[0].position);
        const data3 = await db.query(`select positioname from position where numberfoposition=${(data[0].position)}`);
        console.log(data3[0]);
        console.log("name in server " + data3[0].name);
        return {
            isWorker: true,
            data: data3[0],
            voted: false,
        };
    }
}

module.exports = {
    checkId  
}

