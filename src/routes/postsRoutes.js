import express from "express"
import multer from "multer"
import cors from "cors"
import { listarPosts, postarNovoPoster, uploadImagem, atualizarNovoPost } from "../controller/postsController.js"

const corsOptions = {
    origin:"*",
    optionSuccessStatus:200
}

const upload = multer ({dest: "./uploads"})
 const routes = (app) =>{
    app.use(express.json())
    app.use(cors(corsOptions))
    app.get("/posts", listarPosts )
    app.post("/posts", postarNovoPoster)
    app.post("/upload", upload.single("imagem"), uploadImagem)
    app.put("/upload/:id", atualizarNovoPost)
}

export default routes