import { Router } from "express"
import fs from "fs"
// import path from "path"

const router = Router()
router.get("/add", (req, res) => {
    res.render("addProducts", { title: "Форма для додавання товарів" })
})
router.get("/", (req, res) => {
    fs.readFile("./data/data.json", (err, data) => {
        if (err) return res.status(500).send("Error")
        const products = JSON.parse(data)
        res.render("products", { products })
    })
})

export default router
