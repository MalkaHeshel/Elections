const db = require('./db')

async function employeesall() {
    
    const data = await db.query(`select name,idworker,positioname from position CROSS JOIN workers where workers.position=position.numberfoposition`);
    console.log(data[0]);
    return data;
}

async function getposition() {
    const data = await db.query(`SELECT numberfoposition, positioname FROM elections.position;`);
    return data;
}

async function addposition(name, code) {
    console.log("addp")

    await db.query(`insert into position values(default,'${name}',${code})`);
    console.log("addpa")
}

async function addemployee(position,id,name) {

    console.log("adde")
    console.log('get userpppppppp')

    console.log(position);
    const data = await db.query(`SELECT numberfoposition FROM position where position.positioname='${position}';`)
    console.log(position)
    console.log(data[0].numberfoposition);
     await db.query(`insert into workers values(${id},'${name}',${data[0].numberfoposition})`);

}

module.exports = {
    employeesall, addposition, addemployee, getposition
}