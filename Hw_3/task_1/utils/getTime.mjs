export default function getTime(res) {
    try {
        const time = new Date().getUTCHours()
        let timeOfDay
        switch (time) {
            case 7:
            case 8:
            case 9:
            case 9:
            case 11:
                timeOfDay = "morning"
                break
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                timeOfDay = "afternoon"
                break
            case 18:
            case 19:
            case 20:
            case 21:
                timeOfDay = "evening"
                break
            default:
                timeOfDay = "hight"
                break
        }
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(`<h1>Hello, it\'s ${timeOfDay} now</h1>`)
    } catch (err) {
        throw new Error(err.message)
    }
}
