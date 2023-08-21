import { component$, useContext, useTask$, useSignal } from "@builder.io/qwik";
import { links, type SubHeader } from "~/lib/sub-header-links";
import { headerOne, headerTwo } from "~/context/navContext";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    const topHeader = useContext(headerOne);
    const aside = useContext(headerTwo);
    const currentTopic = useSignal<SubHeader[]>();
    useTask$(({ track }) => {
        track(() => topHeader.value);
        const currentNav = links.find(
            (link) => link.header.toLowerCase() === topHeader.value.toLowerCase()
        );

        currentTopic.value = currentNav?.subHeader;

        const setActive = currentTopic.value?.findIndex((item) => item.text === aside.value);
        setActive === -1 && currentTopic.value && (aside.value = currentTopic.value[0].text);
    });

    const createLinks = async (text: string, link: string, i: number) => {
        return (
            <Link
                onClick$={(e) => {
                    aside.value = (e.target as HTMLElement).innerText;
                }}
                key={i}
                href={link}
                class={text === aside.value && "active"}
            >
                {text}
            </Link>
        );
    };

    return (
        <aside>
            <nav>
                {currentTopic.value &&
                    currentTopic.value.map((link, i) => createLinks(link.text, link.link, i))}
            </nav>
        </aside>
    );
});
