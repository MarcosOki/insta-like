import express from "express"
import multer from "multer"
import { listarPosts, postarNovoPoster, uploadImagem } from "../controller/postsController.js"

const upload = multer ({dest: "./uploads"})
 const routes = (app) =>{
    app.use(express.json())
    app.get("/posts", listarPosts )
    app.post("/posts", postarNovoPoster)
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes