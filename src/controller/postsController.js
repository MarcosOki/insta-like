import { getTodosOsPosts } from "../models/postsModels.js"

export async function listarPosts(req, res) {
    const posts = await getTodosOsPosts()
    res.status(200).json(posts)
}
