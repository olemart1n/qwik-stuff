import { component$, useTask$, useStore } from "@builder.io/qwik";
import ExplicitReactivity from "~/md/explicit-reactivity.md";

interface AppStore {
    count: number;
    delayCount: number;
}
export default component$(() => {
    const store = useStore({
        count: 0,
        delayCount: 0,
    });
    console.log("Render: <App>");
    useTask$(({ track, cleanup }) => {
        track(() => store.count);
        const id = setTimeout(() => (store.delayCount = store.count), 2000);
        cleanup(() => clearTimeout(id));
    });
    return (
        <>
            <h1>useTask()</h1>
            <DisplayCount store={store} />
            <DisplayDelayCount store={store} />
            <button onClick$={() => store.count++}>+1</button>
            <div class="code">
                <ExplicitReactivity />
            </div>
        </>
    );
});

export const DisplayCount = component$((props: { store: AppStore }) => {
    console.log("Render: <DisplayA>");
    return (
        <div>
            <p>Count {props.store.count}</p>
        </div>
    );
});

export const DisplayDelayCount = component$((props: { store: AppStore }) => {
    console.log("Render: <DisplayB>");
    return (
        <div>
            <p>delayCount {props.store.delayCount}</p>
        </div>
    );
});
