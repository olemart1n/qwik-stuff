import { component$, type QRL, implicit$FirstArg, useStore } from "@builder.io/qwik";
import Issue from "~/md/custom/issue.md";
import Delay from "~/md/custom/delay.md";
import Method from "~/md/custom/method.md";
import Example from "~/md/custom/example.md";
import Types from "~/md/custom/types.md";
export default component$(() => {
    const store = useStore({ count: 0, delay: 0 });
    return (
        <>
            <h1>Create a custom api with $</h1>
            <p>
                Imagine that we would like to have a delay method that lazy loads its callback.
                Normally we would have to write something like this:
            </p>
            <div class="code">
                <Issue />
            </div>
            <p>
                The issue with the example above is that the callback has to be downloaded and
                created eagerly. This may be an issue if the closure is large or if the callback is
                never executed (or only executed later.)
            </p>
            <p>
                A better solution would be to have delay$ method that can lazy-load the closure
                associated with the callback. Something like this.
            </p>
            <div class="code">
                <Delay />
            </div>
            <p>
                In the above solution, the callback is only downloaded when delay$ is ready to
                execute it.
            </p>
            <h3>Creating your APIs with $ suffix</h3>
            <p>Qwik runtime works with QRLs. For this reason we define a method like so:</p>
            <div class="code">
                <Method />
            </div>
            <p>
                This method knows how to take a QRL and execute it after a certain delay. The key
                part here is that the QRL.invoke() method is called when the delay is ready and is
                therefore lazy.
            </p>
            <p>
                The next step is to convert the delayQrl method to a delay$ alias. This is done with
                implicit$FirstArg like so:
            </p>
            <code style={"font-size: 1.2rem"}>
                export const delay$ = implicit$FirstArg(delayQrl);
            </code>
            <p>Here are the types to make it clearer as to what is going on.</p>
            <div class="code">
                <Types />
            </div>
            <h3>EXAMPLE</h3>
            <div class="code">
                <Example />
            </div>
            <h3>Result</h3>
            <section>
                <>
                    Count: {store.count} <br />
                    Delay: {store.delay} <br />
                    <button
                        onClick$={async () => {
                            store.count++;
                            await delay$(() => store.delay++, 1000);
                        }}
                    >
                        +1
                    </button>
                </>
            </section>
        </>
    );
});

export function delayQrl<T>(fn: QRL<() => T>, delayInMs: number): Promise<T> {
    return new Promise((res) => {
        setTimeout(() => {
            res(fn());
        }, delayInMs);
    });
}
export const delay$ = implicit$FirstArg(delayQrl);
