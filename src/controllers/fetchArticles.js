import axios from "axios"

export default async () => {
    const res = await axios.get("https://be-nc-news-mtri.onrender.com/api/articles")
    return res.data.articles
}