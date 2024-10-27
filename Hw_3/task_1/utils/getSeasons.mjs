export default function getSeason(res) {
    try {
        const season = new Date().getMonth()
        let month
        switch (season) {
            case 1:
            case 2:
            case 12:
                month = "winter"
                break
            case 3:
            case 4:
            case 5:
                month = "spring"
                break
            case 6:
            case 7:
            case 8:
                month = "summer"
                break
            case 9:
            case 10:
            case 11:
                month = "autumn"
                break
            default:
                month = "Is incorrect month"
                break
        }
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(`<h1>Hello from ${month}!!!\n</h1>`)
    } catch (err) {
        throw new Error(err.message)
    }
}
