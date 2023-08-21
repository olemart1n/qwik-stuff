import { component$ } from "@builder.io/qwik";
import ImplicitTemplateUpdates from "~/md/implicit-template-updates.md";
export default component$(() => {
    return (
        <div>
            <p>Implicit template updates</p>
            <p>
                During SSR rendering the server needs to render all of the components in the
                application. As it is rendering the components the bindings in those components
                perform reads on store properties. For example, when {"<DisplayA>"} reads the countA
                property from the store, Qwik records that as a subscription. Qwik now knows that if
                countA changes then {"<DisplayA>"} needs to be re-rendered. Rendering templates will
                automatically set up subscriptions on the store. Each time the template re-renders
                the old subscriptions are thrown away and new subscriptions are created. This means
                that the template can change the set of things it is listening to during its
                lifecycle.
            </p>
            <div class="code">
                <ImplicitTemplateUpdates />
            </div>
        </div>
    );
});
