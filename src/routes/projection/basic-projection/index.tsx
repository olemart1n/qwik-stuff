import { component$, Slot, useStore } from "@builder.io/qwik";

import BasicProjection from "~/md/basic-projection.md";
export default component$(() => {
    const store = useStore({ count: 0 });
    console.log("Render: <App>");
    return (
        <>
            <h1>Slot</h1>
            <p>
                Projection is a way of passing content to a child component that in turn controls
                where the content is rendered. Projection is a collaboration between the parent and
                child component. The parent component decides what is the content that needs to be
                rendered, while the child component decides where and if the content should be
                rendered.
            </p>
            <div class="code">
                <BasicProjection />
            </div>
            <button onClick$={() => store.count++}>
                This add button is written outside the slot
            </button>
            <Panel>
                Count: {store.count}. <button onClick$={() => store.count++}>+1</button>
            </Panel>
        </>
    );
});

export const Panel = component$(() => {
    console.log("Render: <Panel>");
    return (
        <div style={{ border: "2px solid red;", padding: "1em" }}>
            <Slot />
        </div>
    );
});
