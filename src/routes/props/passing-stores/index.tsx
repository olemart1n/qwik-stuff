import { component$ } from "@builder.io/qwik";
import PassingStores from "~/md/passing-stores.md";
export default component$(() => {
    return (
        <>
            <p>
                Passing stores directly to components is much more efficient in terms of rendering
            </p>
            <br />
            <p>
                Instead of passing them as props. If the state (store) changes, only the component
                would need to rerender and not the mother component
            </p>

            <div class="code">
                <PassingStores />
            </div>
            <b>
                A best practice to follow in Qwik features passing a store to child components
                rather than individual primitives. When you use primitives, the parent component
                needs to rerender just to pass in the new value. When you pass in a store, the
                parent component doesn't need to rerender.
            </b>
        </>
    );
});
