import { component$ } from "@builder.io/qwik";
import MdFile from "~/md/composing-components.md";
import MdFile1 from "~/md/inline-component.md";

export default component$(() => {
    return (
        <>
            <Greeter />
            <div class="code">
                <MdFile />
            </div>
            <p>This component is lazyloaded (it's a Qwik component)</p>
            <br />
            <p>
                Alternatively we can make this as an inline component and will be loaded with the
                mother component. To do that remove the <code>component$</code>
            </p>
            <div class="code">
                <MdFile1 />
            </div>
        </>
    );
});

export const Greeter = component$(() => {
    return <div>Hello World!</div>;
});
