import { component$ } from "@builder.io/qwik";
import ComposeUseHook from "~/md/custom/compose-use-hook.md";
export default component$(() => {
    return (
        <>
            <h1>Compose a useHook</h1>
            <p>
                In this example, the registering of mousemove events is something that could be
                shared between multiple components. Refactor the code by pulling out the code before
                JSX into its own useMousePosition() function.
            </p>
            <div class="code">
                <ComposeUseHook />
            </div>
        </>
    );
});
