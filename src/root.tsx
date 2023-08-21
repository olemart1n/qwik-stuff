import { component$, useStore, useContextProvider } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { headerOne, headerTwo } from "./context/navContext";
import { darkMode } from "./context/modeContext";
import "./global.css";

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Don't remove the `<head>` and `<body>` elements.
     */
    useContextProvider(headerOne, useStore({ value: "Basics" }));
    useContextProvider(headerTwo, useStore({ value: "" }));
    useContextProvider(darkMode, useStore({ value: false }));
    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <RouterHead />
                <ServiceWorkerRegister />
            </head>
            <body lang="en">
                <RouterOutlet />
            </body>
        </QwikCityProvider>
    );
});
