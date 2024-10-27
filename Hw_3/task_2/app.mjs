// Задача 2. Розробити серверну частину додатку, який за відповідними маршрутами (“/”, “/coffee”, “/music”) повертає створені HTML документи.

import { createServer } from "node:http"
import fs from "fs"
import path from 'path'
import url from "url"
const server = createServer((req, res) => {
    const parseUrl = url.parse(req.url)
	let pageName = path.basename( parseUrl.pathname )
	if ( pageName === '' )
		pageName = 'index.html'

    if (fs.existsSync(pageName)) {
        fs.readFile(pageName, (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" })
                res.end("Page not found")
            }
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(data)
        })
    } else {
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.end("Error in server")
    }
})
// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
    console.log("Listening on 127.0.0.1:3000")
})
