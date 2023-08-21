import { Slot } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <>
            <article>
                <Slot />
            </article>
        </>
    );
});
