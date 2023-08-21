```tsx
import { component$, useStore, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./clock.css";

interface ClockStore {
    hour: number;
    minute: number;
    second: number;
}
export const Clock = component$(() => {
    useStyles$(styles);

    const store = useStore<ClockStore>({
        hour: 0,
        minute: 0,
        second: 0,
    });
    ### look here
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

export function updateClock(store: ClockStore) {
    const now = new Date();
    store.second = now.getSeconds() * (360 / 60);
    store.minute = now.getMinutes() * (360 / 60);
    store.hour = now.getHours() * (360 / 12);
}

export default component$(() => {
    return (
        <main>
            <p>
                This is an example of Lazy executing code on component when component becomes
                visible.
            </p>

            <p style={{ height: "800px" }}>
                ⬇️ <strong>Scroll down</strong> until the clock is in view.
            </p>

            <Clock />
        </main>
    );
});
```

```css
/* Clock inspired by: https://paulund.co.uk/create-a-clock-in-css */

.clock {
    background: #fff;
    border: 10px solid #7a7a7a;
    border-radius: 50%;
    box-sizing: border-box;
    height: 300px;
    margin: 0 auto;
    position: relative;
    width: 300px;
}

.twelve,
.three,
.six,
.nine {
    background: #333;
    position: absolute;
}

.twelve,
.six {
    height: 10px;
    width: 4px;
}

.three,
.nine {
    height: 4px;
    width: 10px;
}

.twelve {
    left: 50%;
    top: -1px;
}

.three {
    right: -1px;
    top: 50%;
}

.six {
    left: 50%;
    bottom: -1px;
}

.nine {
    left: -1px;
    top: 50%;
}

.hour {
    height: 60px;
    width: 4px;
    background: #333;
    position: absolute;
    left: 50%;
    top: 80px;
    animation: tick 43200s infinite linear;
    -webkit-animation: tick 43200s infinite linear;
}

.minute {
    height: 100px;
    width: 4px;
    background: #777;
    position: absolute;
    left: 50%;
    top: 40px;
    animation: tick 3600s infinite linear;
    -webkit-animation: tick 3600s infinite linear;
}

.second {
    height: 120px;
    width: 3px;
    background: #fc0505;
    position: absolute;
    left: 50%;
    top: 20px;
    animation: tick 60s infinite linear;
    -webkit-animation: tick 60s infinite linear;
}

.hour,
.minute,
.second {
    transform-origin: 2px 100%;
    -webkit-transform-origin: 2px 100%;
}
```
