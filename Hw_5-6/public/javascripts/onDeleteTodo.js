async function onDeleteTodo(id) {
    try {
        const res = await fetch("/todos/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        })

        if (res.ok) {
            console.log("Задача успішно видалена")
            window.location.href = "/todos"
        } else {
            throw new Error("Сталася помилка під час видалення задачі")
        }
    } catch (err) {
        console.error("Помилка", err.message)
    }
}
