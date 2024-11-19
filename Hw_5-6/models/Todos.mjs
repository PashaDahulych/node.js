import DataFileManager from "../utils/DataFileManager.mjs"
import { v4 as uuidv4 } from "uuid"

class Todos {
    static async readTodoList() {
        try {
            return await DataFileManager.loadData()
        } catch (err) {
            throw new Error("Не вдалось завантажити список задач")
        }
    }

    static async addNewTodo(todoObj) {
        try {
            await DataFileManager.addItem({
                id: uuidv4(),
                ...todoObj,
            })
        } catch (err) {
            throw new Error("Операція з даними не пройшла")
        }
    }

    static async getTodoById(id) {
        try {
            return await DataFileManager.getItemById(id)
        } catch (err) {
            throw new Error("Операція з даними не пройшла")
        }
    }

    static async updateTodo(id, todoData) {
        try {
            await DataFileManager.updateItemById(id, todoData)
        } catch (err) {
            throw new Error("Операція з даними не пройшла")
        }
    }

    static async deleteTodoById(id) {
        try {
            await DataFileManager.deleteItemById(id)
        } catch (err) {
            throw new Error("Операція з даними не пройшла")
        }
    }
}

export default Todos
