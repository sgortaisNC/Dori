import styles from "./page.module.css";
import {FormTodo} from "@/components/FormTodo/FormTodo";


async function getData() {
    const todos = await fetch(`https://dori-ten.vercel.app/api/todo`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await todos.json();
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
