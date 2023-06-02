import axios from "axios"

export const fetchArticles = async (params) => {
    const res = await axios.get("https://be-nc-news-mtri.onrender.com/api/articles", {
        params: params
    })
    return res.data.articles
}