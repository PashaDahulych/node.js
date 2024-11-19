import { body } from "express-validator"

class TodoValidator {
    static userValidatorRules = [
        body("title")
            .trim()
            .escape()
            .not()
            .isEmpty()
            .withMessage("Поле з назвою задачі не має бути пустим"),
        body("email").isEmail().withMessage("Некоректний email"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Пароль має бути ніж 6 цифр"),
        body("priority")
            .trim()
            .escape()
            .not()
            .isEmpty()
            .withMessage("Поле з приорітетністю не має бути пустим"),
        body("timeTodo")
            .trim()
            .escape()
            .not()
            .isEmpty()
            .withMessage(
                "Поле з терміном виконання задачі не має бути пустим "
            ),
    ]
    static todoSchema = {
        title: {
            notEmpty: {
                errorMessage: "Назва задачі є обовʼязкова",
            },
            isLength: {
                options: {
                    min: 3,
                    errorMessage:
                        "Назва задачі повинна містити не менше 3 букв",
                },
            },
            trim: true,
            escape: true,
        },
        email: {
            isEmail: {
                errorMessage: "Email вказаний неправильно",
            },
            normalizeEmail: true,
            trim: true,
            escape: true,
        },
        password: {
            isLength: {
                options: {
                    min: 6,
                },
                errorMessage: "Паролб повинен містити не менше 6 символів",
            },
        },
        priority: {
            notEmpty: {
                errorMessage: "Приорітетність повинна бути вказана",
            },
            isInt: {
                min: 1,
                errorMessage:
                    "Пріоритетність має бути числом і бути не менше 1",
            },
            trim: true,
            escape: true,
        },
        timeTodo: {
            notEmpty: {
                errorMessage: "Час виконання задачі повинен бути вказаний",
            },
            isInt: {
                min: 1,
                errorMessage:
                    "Час виконання задачі має бути числом і бути не менше 1",
            },
            trim: true,
            escape: true,
        },
    }
}
export default TodoValidator
