import styles from "./page.module.css";
import {FormTodo} from "@/components/FormTodo/FormTodo";
import prisma from "@/lib/prisma";


async function getData() {
    return await prisma.todo.findMany();
}



export default async function Home() {
    const todos = await getData();
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>{todo.task}</li>
                    ))}
                </ul>
            </div>
            <FormTodo />
        </main>
    );
}
