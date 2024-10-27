import { Router } from "express"
const router = Router()

router.get("/sites", (req, res) => {
    res.render("favoriteSites", {
        title: "Список улюблений сайтів",
        sites: [
            "https://www.google.com.ua/?hl=uk",
            "https://nodejs.org/en",
            "https://freelancehunt.com/",
            "https://www.upwork.com/",
        ],
    })
} )
router.get("/films", (req, res) => {
    res.render("filmsUrl", {
        title: "Список улюблений онлайн кінотеатрів",
        urls: [
            "https://uakino.me/",
            "https://rezka-ua.tv/",
            "https://megogo.net/ua",
            "https://www.netflix.com/ua/",
        ],
    })
} )
router.get("/about-me", (req, res) => {
    res.render("aboutMe", {
        title: "Інформація про мене",
        country: 'Україна',
        city: 'Чоп',
        usName: 'Паша',
    })
})

router.get("/", (req, res) => {
    res.render( "info", {
        title: "Іифо сторінка",
        
    })
})

export default router
