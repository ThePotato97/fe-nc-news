import axios from "axios"

export const fetchArticles = async (topic) => {
    const res = await axios.get("https://be-nc-news-mtri.onrender.com/api/articles", {
        params: { topic: topic }
    })
    return res.data.articles
}