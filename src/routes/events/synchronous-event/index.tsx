import SynchronousEvent from "~/md/synchronous-event.md";
import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";

export default component$(() => {
    const aHref = useSignal<Element>();
    useVisibleTask$(() => {
        const handler = (event: Event) => {
            event.preventDefault();
            // window.open("http://qwik.builder.io");
            console.log("test");
        };
        aHref.value!.addEventListener("click", handler);
        return () => aHref.value!.removeEventListener("click", handler);
    });
    return (
        <>
            <div>
                <a href="/" ref={aHref}>
                    The event assosiated with this link, will not be loaded onClick. The event
                    function is already in the dom.
                </a>
                <br />
                <i>
                    if something needs to execute immediately, for example an animation on page
                    render, or another imediate respoense
                </i>
                <br />
                <p>
                    While not a common use case, you may occasionally need to process events
                    synchronously.
                </p>
                <p>
                    Since Qwik processes asynchronously by default, your code must be explicitly
                    configured for synchronous calls. This example shows how to eagerly load an
                    event handler that processes a synchronous event.
                </p>
            </div>
            <div class="code">
                <SynchronousEvent />
            </div>
        </>
    );
});
