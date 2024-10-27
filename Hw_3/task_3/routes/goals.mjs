import { Router } from "express"
const router = Router()
router.get("/", (req, res) => {
    res.render( "goals", {
        title: "Мої цілі",
        goalsList: [
            "Шовдарь 1 грн/кг",
            "Картопля задарь =)",
            "Домашня палинка за дякую =!!!",
            'Щоб перераховане вище я міг роздавати всім бажаючим'
        ],
    })
})

export default router
