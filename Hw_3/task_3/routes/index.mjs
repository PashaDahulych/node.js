import { Router } from "express"
const router = Router()
router.get("/", (req, res) => {
    res.render("index", { title: "My first Express", user: "Pasha" })
})

export default router
