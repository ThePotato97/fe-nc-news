import axios from "axios"

export const fetchTopics = async () => {
    const res = await axios.get("https://be-nc-news-mtri.onrender.com/api/topics")
    return res.data.topics
}