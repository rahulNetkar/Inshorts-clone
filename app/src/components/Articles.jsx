import { useEffect, useState } from 'react';
import { getNews } from '../services/api.js';
import Article from './Article.jsx';
const Articles = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        dailyNews();
    }, []);

    const dailyNews = async () => {
        let response = await getNews();
        setNews(response.data);
        console.log(response);
    }

    return (
        news?.length > 0 && news.map(article => (
            <Article article={article} />
        ))
    )
};

export default Articles;
