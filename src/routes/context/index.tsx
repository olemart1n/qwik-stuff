import { component$ } from "@builder.io/qwik";
import { useContextProvider, useStore } from "@builder.io/qwik";
import Items from "./items";
import { todosContext, type TodosStore } from "./contextId";
import UseContext from "~/md/useContext.md";
export default component$(() => {
    useContextProvider(
        todosContext,
        useStore<TodosStore>({
            items: ["Learn Qwik", "Build Qwik app", "Profit"],
        })
    );
    return (
        <>
            <h1>Using context</h1>
            <p>
                Use context to pass data to child components without explicitly passing it through
                components (known as prop drilling).{" "}
            </p>
            <ul>
                Examples of when you can use <code>useContext()</code> includes
                <li>styling information</li>
                <li>application state</li>
                <li>logged in user</li>
            </ul>
            <h3>The code to use a context is divided into three parts:</h3>
            <ul>
                <li>createContextId</li>
                <li>useContextProvider</li>
                <li>useContext</li>
            </ul>
            <p>
                In this example, we would like to pass the TodosStore to the {"<Items>"} component.
                Update the code to use useContext() to retrieve the value.
            </p>
            <div class="code">
                <UseContext />
            </div>
            <Items />
        </>
    );
});
