import TodosController from "../controllers/todosController.mjs"
import { Router } from "express"
import TodoValidator from "../models/todoValidator.mjs"
import multer from "multer"
import { checkSchema } from "express-validator"

// Налаштовуємо місце збереження файлів та їх імена
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    },
})
const upload = multer({ storage })

const router = Router()
router.get("/", TodosController.mainTodos)
router.post(
    "/",
    upload.single("todoImage"),
    checkSchema(TodoValidator.todoSchema),
    TodosController.createTodos
)
router.get("/create", TodosController.createForm)

router.get("/edit/:id", TodosController.getEditTodoForm)
router.post(
    "/edit/:id",
    upload.single("todoImage"),
    checkSchema(TodoValidator.todoSchema),
    TodosController.updateTodo
)

router.get("/:id", TodosController.todoDetail)
router.delete("/delete", TodosController.deleteTodo)

export default router
