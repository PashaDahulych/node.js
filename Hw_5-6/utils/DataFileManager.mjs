import fs  from "fs/promises"
import settings from "../settings.mjs"

class DataFileManager {
    constructor(filePath) {
        this.filePath = filePath
    }

    async saveData(dataArray) {
        try {
            await fs.writeFile(this.filePath, JSON.stringify(dataArray))
        } catch (err) {
            throw new Error(`Помилка при збереженні даних: ${err.message}`)
        }
    }

    async loadData() {
        try {
            const data = await fs.readFile(this.filePath, "utf8")
            return JSON.parse(data)
        } catch (err) {
            throw new Error(`Помилка при завантаженні даних: ${err.message}`)
        }
    }

    async addItem(item) {
        try {
            const data = await this.loadData()
            if (!item) {
                throw new Error("Обʼєкт не передано")
            }
            data.push(item)
            await this.saveData(data)
        } catch (err) {
            throw new Error("помилка при додаванні даних")
        }
    }

    async getItemById(id) {
        try {
            const data = await this.loadData()
            const item = data.find((item) => item.id == id)
            if (!item) throw new Error(`Обєкт з ${id} не знайдено`)
            return item
        } catch (err) {
            throw new Error(`помилка при пошуку обʼєкта: ${err.message}`)
        }
    }

    async updateItemById(id, updateProperties) {
        try {
            const data = await this.loadData()
            const index = data.findIndex((item) => item.id == id)
            if (index !== -1) {
                data[index] = { ...data[index], ...updateProperties }
                await this.saveData(data)
                return true
            } else {
                throw new Error(`Обʼєкт з ${id} не знайдено`)
            }
        } catch (err) {
            throw new Error(`помилка при оновленні обʼєкта: ${err.message}`)
        }
    }

    async deleteItemById(id) {
        try {
            const data = await this.loadData()
            const newData = data.filter((item) => item.id != id)
            if (newData.length === data.length) {
                throw new Error(`обʼєкт з ${id} не знайдено`)
            }
            await this.saveData(newData)
        } catch (err) {
            throw new Error(`Помилка при видаленні обʼєкта: ${err.message}`)
        }
    }
}
export default new DataFileManager(settings.dataPath)
