import axios from "axios"

export const fetchArticle = async (articleId) => {
    const res = await axios.get(`https://be-nc-news-mtri.onrender.com/api/articles/${articleId}`)
    return res.data.article
}