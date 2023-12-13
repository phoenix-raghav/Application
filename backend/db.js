import db from 'mongoose';

// const mongoURL = 'mongodb://localhost:27017/BankingApp';
const mongoURL = 'mongodb+srv://MongoDB:MongoDB_Password@cluster0.o81npqr.mongodb.net/app?retryWrites=true&w=majority';

const connectToMongo = async() =>{
    try{
        await db.connect(mongoURL);
        console.log('Database Connected');
    }
    catch(err){
        console.log(err)
        console.log('Error connecting database');
    }
}

export default connectToMongo;
// // module.exports = connectToMongo;
