import { component$, useOn, $ } from "@builder.io/qwik";
import ProgrammaticListeners from "~/md/programmatic-listeners.md";
export default component$(() => {
    useOn(
        "click",
        $(() => alert("Hello World!"))
    );
    return (
        <>
            <div>
                <p>
                    There are times when your app needs to add a conditional listener. Sometimes a
                    listener name is unknown, or you need to use an imperative approach to set up a
                    listener.
                </p>
                <p>
                    In this example, clicking the link would redirect to another page, in this case
                    '/'. But instead, 'Do something else' pops up
                </p>
            </div>
            <div class="code">
                <ProgrammaticListeners />
            </div>
        </>
    );
});
