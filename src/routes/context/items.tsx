import { component$, useContext } from "@builder.io/qwik";
import { todosContext } from "./contextId";

export default component$(() => {
    const todos = useContext(todosContext);
    return (
        <ul>
            {todos.items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
});
