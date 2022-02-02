import { data } from './constants/data.js'
import News from './model/news.js';


const DefaultData = async () => {
    try {
        await News.deleteMany({});
        await News.insertMany(data);

        console.log("Data inserted succcessfully");
    }
    catch (err) {
        console.log('Error', err.message);
    }
}

export default DefaultData;