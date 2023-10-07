import db from 'mongoose';

const mongoURL = 'mongodb://localhost:27017/BankingApp';

const connectToMongo = async() =>{
    try{
        await db.connect(mongoURL, {serverSelectionTimeoutMS: 5000});
        console.log('Database Connected');
    }
    catch{
        console.log('Error connecting database');
    }
}

export default connectToMongo;
// module.exports = connectToMongo;