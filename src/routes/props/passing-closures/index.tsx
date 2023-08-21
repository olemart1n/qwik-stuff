import { component$ } from "@builder.io/qwik";
import PassingClosures from "~/md/passing-closures.md";
export default component$(() => {
    return (
        <>
            <p>Passing closures</p>
            <div class="code">
                <PassingClosures />
            </div>
        </>
    );
});
