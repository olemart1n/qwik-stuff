import { component$, useStore } from "@builder.io/qwik";
import ListeningOnGlobalEvent from "~/md/listening-on-global-event.md";
export default component$(() => {
    const store = useStore({ x: 0, y: 0 });
    return (
        <>
            <div
                document:onMouseMove$={(event) => {
                    store.x = event.clientX;
                    store.y = event.clientY;
                    console.log(store);
                }}
            >
                Your mouse location is ({store.x}, {store.y}).
            </div>
            <div class="code">
                <ListeningOnGlobalEvent />
            </div>
        </>
    );
});
