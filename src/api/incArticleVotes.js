import axios from "axios"

export const incArticleVotes = async (articleId, amount) => {
    const res = await axios.patch(`https://be-nc-news-mtri.onrender.com/api/articles/${articleId}`, {
        inc_votes: amount
    })
    return res.data.article
}