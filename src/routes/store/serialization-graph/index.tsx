import { component$, useStore, type QRL, $, useSignal } from "@builder.io/qwik";
import SerializationGraph from "~/md/serialization-graph.md";

interface ParentStore {
    name: string;
    children: ChildStore[];
    greetNames: QRL<(parent: ParentStore) => void>;
}
interface ChildStore {
    name: string;
    parent: ParentStore;
}
export default component$(() => {
    const newChild = useSignal("");
    const parent: ParentStore = {
        name: "Builder.io",
        children: [],
        greetNames: $((parent) => alert(parent.name)),
    };
    parent.children = [
        { name: "Qwik", parent },
        { name: "Partytown", parent },
    ];
    const parentStore = useStore<ParentStore>(parent, { deep: true });
    return (
        <>
            <p>
                There is no limit to how many stores can be created per component, nor to where they
                are passed. While the best practice is to implement top-down data flows, Qwik
                doesn't require this design philosophy.
            </p>
            <section>
                {parentStore.name}
                <button onClick$={async () => await parentStore.greetNames(parent)}>alert</button>
                <ul>
                    {parentStore.children.map((child, i) => (
                        <li key={i}>
                            {child.name} -&lt; {child.parent.name}
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    onInput$={(e) => (newChild.value = (e.target as HTMLInputElement).value)}
                />
                <button
                    onClick$={() => {
                        parentStore.children.push({ name: newChild.value, parent });
                        console.log(parentStore.children);
                    }}
                >
                    Add child
                </button>
            </section>
            <div class="code">
                <SerializationGraph />
            </div>
        </>
    );
});
