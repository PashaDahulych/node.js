export default function getWeekday(res) {
    try {
        const day = new Date().getDay()
        let weekday
        switch (day) {
            case 0:
                weekday = "sunday"
                break
            case 1:
                weekday = "monday"
                break
            case 2:
                weekday = "tuesday"
                break
            case 3:
                weekday = "wednesday"
                break
            case 4:
                weekday = "thursday"
                break
            case 5:
                weekday = "friday"
                break
            case 6:
                weekday = "saturday"
                break
            default:
                weekday = "Is incorrect weekday"
                break
        }
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(`<h1>Today is ${weekday}</h1>`)
    } catch (err) {
        throw new Error(err.message)
    }
}
