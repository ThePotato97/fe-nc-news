import axios from "axios"

export default async (articleId) => {
    const res = await axios.get(`https://be-nc-news-mtri.onrender.com/api/articles/${articleId}/comments`)
    return res.data.comments
}