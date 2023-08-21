import { component$, useStore, Slot } from "@builder.io/qwik";
import NamedSlots from "~/md/named-slots.md";
export default component$(() => {
    return (
        <>
            <h1>Named slots</h1>
            <div class="code">
                <NamedSlots />
            </div>
            <Collapsable>
                <div q:slot="open">▶ (collapsed summary)</div>
                <div q:slot="closed">
                    ▼
                    <div>
                        {" "}
                        Content that should be displayed when the collapse component is open.{" "}
                    </div>
                </div>
            </Collapsable>
        </>
    );
});

export const Collapsable = component$(() => {
    console.log("Render: <Collapsable>");
    const store = useStore({ open: true });
    return (
        <div onClick$={() => (store.open = !store.open)}>
            {store.open ? <Slot name="open" /> : <Slot name="closed" />}
        </div>
    );
});
