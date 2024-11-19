// import { validationResult } from "express-validator"
// import Todo from "../models/Todos.mjs"

// class TodoController {
//     static createTodo(req, res) {
//         const errors = validationResult(req)
//         if (!errors.isEmpty()) {
//             const data = req.body
//             if (req.params.id) data.id == req.params.id
//             return res.status(400).render("todos", {
//                 errors: errors.array(),
//                 data: data,
//             })
//         }
//     }
// }

// export default TodoController
