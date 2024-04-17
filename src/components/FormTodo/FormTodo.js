"use client";

async function addTodo(e) {
    e.preventDefault();
    const task = e.target.task.value;
    await fetch('/api/todo', {
        method: 'POST',
        body: JSON.stringify({
            task: task,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    window.location.reload();

}

export function FormTodo() {
    return (
        <form onSubmit={addTodo}>
            <input type="text" autoComplete={"off"} name={"task"}/>
            <button type={"submit"}>Ajouter</button>
        </form>
    );
}