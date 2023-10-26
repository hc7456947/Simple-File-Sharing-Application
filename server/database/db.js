

import mongoose from "mongoose";


const DBConnection = async () => {
    const MONODB_URI =`mongodb://himanshu:chauhan@ac-w6jgy0s-shard-00-00.ztzi8rq.mongodb.net:27017,ac-w6jgy0s-shard-00-01.ztzi8rq.mongodb.net:27017,ac-w6jgy0s-shard-00-02.ztzi8rq.mongodb.net:27017/?ssl=true&replicaSet=atlas-kewpoy-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully.');
    } catch (error) {
        console.log('Error while connecting with the database !', error.message);
    }
}


export default DBConnection;