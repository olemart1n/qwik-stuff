import { useTask$, useStore, component$ } from "@builder.io/qwik";

import UseTask from "~/md/use-task.md";
interface Values {
    value: string;
    debouncedValue: string;
}
export default component$(() => {
    const store = useStore<Values>({
        value: "",
        debouncedValue: "",
    });
    useTask$(({ track, cleanup }) => {
        track(() => store.value);
        const timeout = setTimeout(() => {
            store.debouncedValue = store.value;
        }, 500);

        cleanup(() => clearTimeout(timeout));
    });
    return (
        <>
            <p>
                Use useTask$() to execute a function before the initial render and whenever the
                tracking values change. The function executes before rendering, but it can't delay
                rendering, so if useTask$() is asynchronous, the rendering will happen before the
                useTask$() is fully executed.
            </p>
            <div class="code">
                <UseTask />
            </div>
            <section>
                <div>
                    <input
                        type="text"
                        onInput$={(e) => (store.value = (e.target as HTMLInputElement).value)}
                    />
                </div>
                <div>
                    <p>Value: {store.value}</p>
                    <p>Debounced value: {store.debouncedValue}</p>
                </div>
            </section>
        </>
    );
});
