export interface SubHeader {
    link: string;
    text: string;
}

export interface LinkItem {
    header: string;
    link: string;
    subHeader: SubHeader[];
}
export const links: LinkItem[] = [
    {
        header: "Basics",
        link: "/basics/basic-component",
        subHeader: [
            {
                link: "/basics/basic-component",
                text: "Basic component",
            },
            {
                link: "/basics/state-management",
                text: "State management",
            },
            {
                link: "/basics/fetching-resource",
                text: "Fetching resource",
            },
        ],
    },
    {
        header: "Components",
        link: "/components/binding-expressions",
        subHeader: [
            {
                link: "/components/binding-expressions",
                text: "Binding expressions",
            },
            {
                link: "/components/composing-components",
                text: "Composing components",
            },
        ],
    },
    {
        header: "Events",
        link: "/events/listening-on-event",
        subHeader: [
            {
                link: "/events/listening-on-event",
                text: "Listening on event",
            },
            {
                link: "/events/listening-on-global-event",
                text: "Listening on global event",
            },
            {
                link: "/events/prevent-default",
                text: "Prevent",
            },
            {
                link: "/events/synchronous-event",
                text: "Synchronous event",
            },
            {
                link: "/events/programmatic-listeners",
                text: "Programmatic listeners",
            },
        ],
    },
    {
        header: "Store",
        link: "/store/storing-state",
        subHeader: [
            {
                link: "/store/storing-state",
                text: "Storing state",
            },
            {
                link: "/store/serialization-graph",
                text: "Serialization graph",
            },
            {
                link: "/store/non-serializable-properties",
                text: "Non serializable Properties",
            },
        ],
    },
    {
        header: "Props",
        link: "/props/passing-to-components",
        subHeader: [
            {
                link: "/props/passing-to-components",
                text: "Passing to components",
            },
            {
                link: "/props/passing-stores",
                text: "Passing stores",
            },
            {
                link: "/props/passing-closures",
                text: "Passing closures",
            },
        ],
    },
    {
        header: "Reactivity",
        link: "/reactivity/implicit-template-updates",
        subHeader: [
            {
                link: "/reactivity/implicit-template-updates",
                text: "Implicit template updates",
            },
            {
                link: "/reactivity/explicit-reactivity",
                text: "Explicit reactivity",
            },
            {
                link: "/reactivity/explicit-reactivity-1",
                text: "Explicit reactivity useResource",
            },
        ],
    },
    {
        header: "Hooks",
        link: "/hooks/use-task",
        subHeader: [
            {
                link: "/hooks/use-task",
                text: "useTask()",
            },
            {
                link: "/hooks/use-signal",
                text: "useSignal()",
            },
            {
                link: "/hooks/use-visible-task",
                text: "useVisibleTask()",
            },
            {
                link: "/hooks/use-on",
                text: "useOn()",
            },
        ],
    },
    {
        header: "Projection",
        link: "/projection/projection/basic-projection",
        subHeader: [
            {
                link: "/projection/basic-projection",
                text: "Basic projection",
            },
            {
                link: "/projection/named-slots",
                text: "Named slots",
            },
            {
                link: "/projection/fallback-content",
                text: "Fallback content",
            },
        ],
    },
    {
        header: "Custom",
        link: "/custom/custom/create-custom-api",
        subHeader: [
            {
                link: "/custom/create-custom-api",
                text: "Create custom api",
            },
            {
                link: "/custom/composing-use-hooks",
                text: "Composing use hooks",
            },
        ],
    },
];
