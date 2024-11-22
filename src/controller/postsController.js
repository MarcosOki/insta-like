import fs from "fs"
import { getTodosOsPosts, criarPost } from "../models/postsModels.js"


export async function listarPosts(req, res) {
    const posts = await getTodosOsPosts()
    res.status(200).json(posts)
}

export async function postarNovoPoster(req, res) {
    const novoPost = req.body
    try{
        const postCriado = await criarPost(novoPost)
        return res.status(201).json(postCriado)
    } catch(erro){
        console.error(erro.message)
        res.status(500).json({"Error": "Falha na requisição"})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao:"",
        imgUrl: req.file.originalname,
    }
    try{
        const postCriado = await criarPost(novoPost)
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(201).json(postCriado)
    } catch(erro){
        console.error(erro.message)
        res.status(500).json({"Error": "Falha na requisição"})
    }
}
