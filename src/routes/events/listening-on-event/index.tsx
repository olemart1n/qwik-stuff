import { component$ } from "@builder.io/qwik";
import ListeningOnEvent from "~/md/listening-on-event.md";
export default component$(() => {
    return (
        <>
            <div>
                <p>
                    When a user clicks on the button, the Qwikloader intercepts the event and looks
                    for an element with on:click attribute.
                </p>
                <p>The associated code is lazy-loaded, to avoid delays on user interaction.</p>
            </div>
            <section>
                <button onClick$={() => alert("hello")}>click me!</button>
            </section>
            <div class="code">
                <ListeningOnEvent />
            </div>
        </>
    );
});
