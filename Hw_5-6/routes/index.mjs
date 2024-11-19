import { Router } from "express"
const router = Router()
router.get("/", (req, res) => {
    res.render("index", { title: "Todo менеджер на мінімалках" })
} )

export default router
