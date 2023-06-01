import axios from "axios"

export default async (topic) => {
    const res = await axios.get("https://be-nc-news-mtri.onrender.com/api/articles", {
        params: { topic: topic }
    })
    return res.data.articles
}