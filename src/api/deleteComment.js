import axios from "axios"

export const deleteComment = async (commentId) => {
    const res = await axios.delete(`https://be-nc-news-mtri.onrender.com/api/comments/${commentId}`)
    return res.status
}