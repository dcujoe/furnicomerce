import mongoose from 'mongoose'

const connection = {};

async function connectDb() {
    if (connection.isConnected) {
        //checking if the database is connected 
        console.log("Using existing connection")
        return;
    }


    // use a new database connection object
    const db = await mongoose.connect(process.env.MONGO_SRV, {
        //these commands help prevent deprecated warnings when using mongoose. learn from mongoose website
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    console.log("DB connected")
    connection.isConnected = db.connections[0].readyState;
    
}

// this whole process is used when connecting mongo DB application with a serverless application like AWS lambda

export default connectDb;