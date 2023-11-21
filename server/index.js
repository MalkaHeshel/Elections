const express = require('express');
const port = 3014;
const app = express();
const votersRouter = require('./router/votersRouter');
const idRouter = require('./router/idRouter');
const questionsRouter = require('./router/questionsRouter');
const partiesRouter = require('./router/partiesRouter');
const workerRouter = require('./router/workerRouter');
const adminRouter = require('./router/adminRouter');
const resultsRouter = require('./router/resultsRouter');
const dataRouter=require('./router/dataRouter')
const satisticRouter=require('./router/satisticRouter')
app.use(express.json());
app.use(express.urlencoded({ extended: true, })
);


const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use('/api/users', votersRouter);

app.use('/api/legalvotes', idRouter);

app.use('/api/questions', questionsRouter);

app.use('/api/parties', partiesRouter);
app.use('/api/results', resultsRouter);
//app.use('/api/currntelection', currntelection);

app.use('/api/workers/chekId', workerRouter);
app.use('/api/administration/employees', adminRouter);

app.use('/api/data',dataRouter)
app.use('/api/satistic', satisticRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});



