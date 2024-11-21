import express from "express"

const posts = [
    {
        id:1,
        descricao: "uma foto teste",
        url: "https://placecats.com/millie/300/150"
    },
    {
        id:2,
        descricao: "Uma foto linda de um gatinho",
        url: "https://placecats.com/millie/300/150"
    },
    {
        id:3,
        descricao: "Um gatinho fazendo careta",
        url: "https://placecats.com/millie/300/150"
    },
    {
        id:4,
        descricao: "Gato preguiçoso tomando sol",
        url: "https://placecats.com/millie/300/150"
    },
    {
        id:5,
        descricao: "Gato explorando a caixa",
        url: "https://placecats.com/millie/300/150"
    },
    {
        id:6,
        descricao: "Gato comendo ração",
        url: "https://placecats.com/millie/300/150"
    }
]

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

app.get("/posts", (req, res) => {
    res.status(200).json(posts)
})
function buscarPostsPorId(id){
    return posts.findIndex((post)=>{return post.id === Number(id)})
}
app.get("/posts/:id", (req,res) => {
    const index = buscarPostsPorId(req.params.id)
    return res.status(200).json(posts[index])
})