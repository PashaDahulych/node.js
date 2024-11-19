import Todos from "../models/Todos.mjs"
import { validationResult } from "express-validator"

class TodosController {
    static async mainTodos(req, res) {
        try {
            const todosList = await Todos.readTodoList()
            res.render("todos/todosList", {
                todos: todosList,
            })
        } catch (err) {
            console.error("err")
            res.status(500).send("Помилка при валідації")
        }
    }

    static createForm(req, res) {
        res.render("todos/todosForm", { todo: {}, errors: [] })
    }

    static async createTodos(req, res) {
        const errors = validationResult(req)

        try {
            if (!errors.isEmpty()) {
                console.log("===req.bogy===")
                console.log(req.bogy)

                const data = req.body
                if (req.params.id) data.id = req.params.id
                return res.status(400).render("todos/todosForm", {
                    errors: errors.array(),
                    todo: data,
                })
            }

            const todoData = { ...req.body }
            if (req.file) {
                todoData.imgSrc = req.file.filename
            }

            await Todos.addNewTodo(todoData)
            res.redirect("/todos")
        } catch (err) {
            console.error(err.message)
            res.status(500).send("Помилка при валідації")
        }
    }

    static async todoDetail(req, res) {
        const id = req.params.id
        const todo = await Todos.getTodoById(id)
        res.render("todos/todoDetails", { todo })
    }

    static async getEditTodoForm(req, res) {
        try {
            const todo = await Todos.getTodoById(req.params.id)
            res.render("todos/todosForm", { todo, errors: [] })
        } catch (err) {
            console.error(err.message)
            res.status(500).send(
                "Помилка при завантаженні форми редагування задачі"
            )
        }
    }

    static async updateTodo(req, res) {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.render("todos/todosForm", {
                errors: errors.array(),
                todo: { ...req.body, id: req.params.id }, // Передаємо об'єкт todo у форму
            })
        }

        try {
            // Створюємо об'єкт даних для оновлення
            const data = { ...req.body } // Ініціалізуємо data тут
            if (req.params.id) {
                data.id = req.params.id // Додаємо id
            }
            if (req.file) {
                data.imgSrc = req.file.filename // Додаємо ім'я файлу, якщо є
            }

            // Оновлення задачі
            await Todos.updateTodo(req.params.id, data)
            res.redirect("/todos")
        } catch (err) {
            console.error(err.message)
            res.status(500).send("Помилка при оновленні задачі")
        }
    }

    static deleteTodo(req, res) {
        Todos.deleteTodoById(req.body.id)
        res.status(200).send("ok")
    }
}

export default TodosController
