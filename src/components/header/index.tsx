import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { headerOne } from "~/context/navContext";
import { links } from "~/lib/sub-header-links";
import { MOON_ICON, MOON_ICON_LIGHT } from "~/lib/moon-icon";
import { darkMode } from "~/context/modeContext";

export default component$(() => {
    const signal = useContext(headerOne);
    const mode = useContext(darkMode);
    return (
        <header>
            <h2>Qwik stuff</h2>
            <nav>
                {links.map((link, i) => (
                    <Link
                        onClick$={(e) => (signal.value = (e.target as HTMLElement).innerText)}
                        key={i}
                        href={link.link}
                        class={link.header === signal.value && "active"}
                    >
                        {link.header}
                    </Link>
                ))}
            </nav>

            <button
                type="button"
                class="dark-mode-button"
                onClick$={() => {
                    mode.value = !mode.value;
                }}
            >
                {mode.value === false ? MOON_ICON : MOON_ICON_LIGHT}
            </button>
        </header>
    );
});
