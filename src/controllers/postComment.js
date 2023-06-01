import axios from "axios"

export default async (articleId, username, body) => {
    const res = await axios.post(`https://be-nc-news-mtri.onrender.com/api/articles/${articleId}/comments`, {
        username,
        body
    })
    return res.data.comment
}