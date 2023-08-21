import { component$, useStore } from "@builder.io/qwik";
import StoringState from "~/md/storing-state.md";
export default component$(() => {
    const counter = useStore({ count: 0 });
    return (
        <>
            <p>
                Applications needs to store states to be useful, otherwise they are just static
                pages
            </p>
            <div class="code">
                <StoringState />
            </div>
            <section>
                <p>Count: {counter.count}</p>
                <button onClick$={() => counter.count++}>+1</button>
            </section>
        </>
    );
});
