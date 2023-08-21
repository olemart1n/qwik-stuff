import PreventDefault from "~/md/prevent-default.md";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <>
            <div>
                <a href="/" preventdefault:click onClick$={() => alert("do something else.")}>
                    click me!
                </a>
                <p>to prevent default do as shown below</p>
                <p>
                    In this example, clicking the link would redirect to another page, in this case
                    '/'. But instead, 'Do something else' pops up
                </p>
            </div>
            <div class="code">
                <PreventDefault />
            </div>
        </>
    );
});
