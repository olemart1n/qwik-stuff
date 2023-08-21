import { useSignal, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

import UseSignal from "~/md/use-signal.md";
export default component$(() => {
    const store = useStore({
        width: 0,
        height: 0,
    });
    const outputRef = useSignal<Element>();
    useVisibleTask$(() => {
        if (outputRef.value) {
            const rect = outputRef.value.getBoundingClientRect();
            store.width = Math.round(rect.width);
            store.height = Math.round(rect.height);
        }
    });

    return (
        <>
            <h1>useSignal</h1>
            <p>
                Use useSignal() to store any single value similar to useStore(). useSignal is
                heavily optimized when it comes to re-rendering components. It is able to skip
                re-renderings of parent components even when the signal itself is defined in the
                parent. useSignal works with all primitive types as well as with not nested / flat
                objects. If you need to store arrays or complex objects use useStore instead.
            </p>
            <div class="code">
                <UseSignal />
            </div>
            <aside style={{ border: "1px solid red", width: "100px" }} ref={outputRef}>
                Change text value here to stretch the box.
            </aside>
            <p>
                The above red box is {store.height} pixels high and {store.width} pixels wide.
            </p>
        </>
    );
});
