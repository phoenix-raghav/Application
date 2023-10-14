import express from 'express';
import connectToMongo from './db.js';
import Auth from './Routes/Auth.js';
import Transactions from './Routes/Transactions.js';
import verifyToken from './middlewares/Token.js';
const app = express();
const port = 8080;
connectToMongo();

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use(express.json());
app.use('/',Auth);
app.use('/transaction',verifyToken);
app.use('/transaction',Transactions);

app.listen(port,()=>{
    console.log('Server is running on port ' + port);
})