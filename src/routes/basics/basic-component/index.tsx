import { component$ } from "@builder.io/qwik";
import BasicComponents from "~/md/basic-component.md";
export default component$(() => {
    return (
        <>
            <div>Hello World!</div>
            <div class="code">
                <BasicComponents />
            </div>
        </>
    );
});
