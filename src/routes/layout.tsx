import { component$, Slot, useContext } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/header";
import Aside from "~/components/sub-header";
import Footer from "~/components/footer";
import { headerTwo } from "~/context/navContext";
import { darkMode } from "~/context/modeContext";
export const onGet: RequestHandler = async ({ cacheControl }) => {
    cacheControl({
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        maxAge: 5,
    });
};

export const useServerTimeLoader = routeLoader$(() => {
    return {
        date: new Date().toISOString(),
    };
});

export default component$(() => {
    const aside = useContext(headerTwo);
    const mode = useContext(darkMode);
    return (
        <>
            <Header />
            <main class={mode.value && "dark-mode"}>
                <Aside />
                <div>
                    <h1>{aside.value}</h1>
                    <Slot />
                </div>
            </main>
            <Footer />
        </>
    );
});
