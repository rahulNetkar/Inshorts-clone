import News from "../model/news.js";

export const getNews = async (req, res) => {
    try {
        let data = await News.find({});

        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
}