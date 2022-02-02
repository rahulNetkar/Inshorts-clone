import mongoose from "mongoose";


const Connection = async () => {
    try {
        const URL = `mongodb://user:admin123321@inshort-app-shard-00-00.tumci.mongodb.net:27017,inshort-app-shard-00-01.tumci.mongodb.net:27017,inshort-app-shard-00-02.tumci.mongodb.net:27017/INSHORTS-APP?ssl=true&replicaSet=atlas-3r6soj-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })

        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error while connecting to database', error);
    }

}


export default Connection;