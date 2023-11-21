const db = require('./db')

async function getquestions() {
    console.log("server")
    const data = await db.query(`select count(idQuestions) as num from questions`);
    const quesLength = data[0].num;
    console.log(data)
    let array = [quesLength]
    array.forEach(element => {
        element = 0;
    });

    let secondArray = [3]
    for (let i = 0; i < 3; i++) {
        let question = Math.floor(Math.random() * quesLength) + 1;
        if (!array[question]) {
            array[question] = 1;
            secondArray[i] = question;
        }
        else
            i -= 1;

    }


    const data2 = await db.query(`SELECT * FROM questions WHERE idQuestions=${secondArray[0]}  or idQuestions =${secondArray[1]}  or idQuestions =${secondArray[2]} ;`);
    console.log("id  " + data2)
    console.log(data2)
    return data2;
}

async function comperanswer(iduser, myanswer) {
    let myisequel = true;
    let item0 = [myanswer.length];
    for (let i = 0; i < myanswer.length; i++) {
        item0[i] = `item${i}`
        console.log(item0[i])
    }
    console.log(myanswer.length)
    for (let index = 0; index < myanswer.length; index++) {
        //console.log(myanswer[index].item0.idQuestion)
        console.log("before for")
        console.log(myanswer[index][item0[index]].idQuestion)
        const data = await db.query(` select answer from elections.questions where idQuestions=${myanswer[index][item0[index]].idQuestion};`);
        console.log("after for")
        console.log("id/answer  " + data)
        console.log(data[0].answer)
        console.log(myanswer[index][item0[index]].idQuestion)
        const ans = await comperanswer2(iduser, myanswer[index][item0[index]].ans, data[0].answer);
        console.log(ans + "שמד")
        if (!ans) {
            return { isequel: false }
        }

    }

    return { isequel: myisequel }
}

async function comperanswer2(iduser, myanswer, colum) {
    let data;
    if (colum == 'dateofbirth') {
        console.log("in the if")
        const data2 = await db.query(`SELECT  DATE_FORMAT(${colum}, '%Y/%m/%d') as date FROM elections.legalvoters where id='${iduser}';  `);
        data = data2[0].date;
        console.log(colum)
        console.log(myanswer);
        console.log(data);
        console.log(data == myanswer);
    }
    else {
        console.log("in the else")
        const data2 = await db.query(`select ${colum} from legalvoters where id=${iduser} `);
        console.log(data2[0])
        console.log("colum :   " + colum)
        console.log(data2[0][colum] == myanswer);
        console.log(myanswer);
        console.log(data2[0][colum]);


        data = data2[0][colum];
    }
    console.log("outside from the if")
    if (data == myanswer) {

        console.log("true")
        return true;
    }
    else
        return false;

}


module.exports = {

    getquestions, comperanswer, comperanswer2

}