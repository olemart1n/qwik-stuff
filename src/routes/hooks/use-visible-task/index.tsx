import { component$, useStore, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import styling from "./clock.css?inline";
import UseVisibleTask from "~/md/use-visible-task.md";
interface ClockStore {
    hour: number;
    minute: number;
    second: number;
}
export default component$(() => {
    return (
        <>
            <h1>useVisibleTsk()</h1>
            <p>
                Use useVisibleTask$() to execute code after the component is resumed. This is useful
                for setting up timers or streams on the client when the application is resumed.
            </p>
            <p>
                useVisibleTask$() is a client-only method. (There is no equivalent on the server.)
            </p>

            <h3>When is useVisibleTask executed?</h3>
            <p>
                Client effect code is executed after the component is resumed. The useVisibleTask$()
                method takes an additional argument
                (strategy:'intersection-observer|document-ready|document-idle') that controls when
                the effect is executed. There are three options:
            </p>
            <ul>
                <li>
                    intersection-observer (default): the task will first execute when the element is
                    visible in the viewport, under the hood it uses the IntersectionObserver API.
                </li>
                <li>
                    document-ready: the task will first execute when the document is ready, under
                    the hood it uses the document load event.
                </li>
                <li>
                    document-idle: the task will first execute when the document is idle, under the
                    hood it uses the requestIdleCallback API.
                </li>
            </ul>

            <div class="code">
                <UseVisibleTask />
            </div>

            <section>
                <p>
                    This is an example of Lazy executing code on component when component becomes
                    visible.
                </p>

                <p style={{ height: "800px" }}>
                    ⬇️ <strong>Scroll down</strong> until the clock is in view.
                </p>

                <Clock />
            </section>
        </>
    );
});

export function updateClock(store: ClockStore) {
    const now = new Date();
    store.second = now.getSeconds() * (360 / 60);
    store.minute = now.getMinutes() * (360 / 60);
    store.hour = now.getHours() * (360 / 12);
}

export const Clock = component$(() => {
    useStylesScoped$(styling);

    const store = useStore<ClockStore>({
        hour: 0,
        minute: 0,
        second: 0,
    });

    useVisibleTask$(() => {
        const intervalId = setInterval(() => updateClock(store), 1000);
        return () => clearInterval(intervalId);
    });

    return (
        <div class="clock">
            <div class="twelve"></div>
            <div class="three"></div>
            <div class="six"></div>
            <div class="nine"></div>
            <div class="hour" style={{ transform: `rotate(${store.hour}deg)` }}></div>
            <div class="minute" style={{ transform: `rotate(${store.minute}deg)` }}></div>
            <div class="second" style={{ transform: `rotate(${store.second}deg)` }}></div>
        </div>
    );
});
