import { component$ } from "@builder.io/qwik";
import PassingProps from "~/md/passing-to-components.md";
export default component$(() => {
    return (
        <>
            <Greeter salutation="Hello" name="world" />
            <div class="code">
                <PassingProps />
            </div>
        </>
    );
});

interface GreeterProps {
    salutation: string;
    name: string;
}
const Greeter = component$((props: GreeterProps) => {
    return (
        <p>
            {props.salutation} {props.name}!
        </p>
    );
});
