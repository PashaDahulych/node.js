// Задача 1. Розробити додаток з такими маршрутами:
// season - повертає пору року
// day - повертає поточний день
// time - повертає час дня (ранок, обід, вечеря)

import { createServer } from "node:http"
import url from "node:url"
import getSeason from "./utils/getSeasons.mjs"
import getWeekday from "./utils/getWeekday.mjs"
import getTime from "./utils/getTime.mjs"


const server = createServer((req, res) => {
    const parseUrl = url.parse(req.url)
    const pathName = parseUrl.pathname

    if (pathName === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Hello from main page!\n")
    } else if (pathName === "/season") getSeason(res)
    else if (pathName === "/day") getWeekday(res)
    else if (pathName === "/time") getTime(res)
    else {
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.end("Error in server")
    }
})
// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
    console.log("Listening on 127.0.0.1:3000")
})
