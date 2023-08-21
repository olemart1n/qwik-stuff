import { component$, useOnDocument, $, useStore, useOn, useOnWindow } from "@builder.io/qwik";
import UseOn from "~/md/use-on.md";
export default component$(() => {
    const store = useStore(
        {
            element: { x: 0, y: 0 },
            window: { x: 0, y: 0 },
            document: { x: 0, y: 0 },
        },
        { deep: true }
    );
    useOn(
        "mousemove",
        $((event) => {
            store.element.x = (event as MouseEvent).x;
            store.element.y = (event as MouseEvent).y;
        })
    );
    useOnDocument(
        "mousemove",
        $((event) => {
            store.document.x = (event as MouseEvent).x;
            store.document.y = (event as MouseEvent).y;
        })
    );
    useOnWindow(
        "mousemove",
        $((event) => {
            store.window.x = (event as MouseEvent).x;
            store.window.y = (event as MouseEvent).y;
        })
    );
    return (
        <div>
            <h1>useOn</h1>
            <p>
                Use useOn() / useOnDocument() / useOnWindow() to programmatically set up listeners
                on host elements. This is useful when you are creating custom APIs and don't have
                access to place these events in the JSX or if the events are not known ahead of
                time, such as if they are created based on component props.
            </p>
            <ul>
                <li>
                    Element: ({store.element.x}, {store.element.y})
                </li>
                <li>
                    Document: ({store.document.x}, {store.document.y})
                </li>
                <li>
                    Window: ({store.window.x}, {store.window.y})
                </li>
            </ul>
            <div class="code">
                <UseOn />
            </div>
        </div>
    );
});
