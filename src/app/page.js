import styles from "./page.module.css";
import prisma from '@/lib/prisma';
import {FormTodo} from "@/components/FormTodo/FormTodo";


async function getData() {
    const data = await prisma.todo.findMany({
        orderBy: { id: 'asc' },
        where: { completed: false }
    } );
    return data ?? [];
}



export default async function Home() {
    const todos = await getData();
    console.log(todos)
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
