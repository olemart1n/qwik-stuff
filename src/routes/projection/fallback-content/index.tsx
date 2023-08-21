import { component$, useStyles$, Slot } from "@builder.io/qwik";
import FallbackContent from "~/md/fallback-content.md";

export const Card = component$(() => {
    useStyles$(CSS);
    return (
        <article class="card">
            <header class="title">
                <Slot name="title"></Slot>
            </header>
            <section class="body">
                <Slot name="body"></Slot>
            </section>
        </article>
    );
});
export default component$(() => {
    return (
        <>
            <h1>Fallback content</h1>
            <p>
                Fallback content allows the child component to display fallback content in case the
                parent component did not provide content. The fallback content can be done with CSS,
                it is necessary to add a CSS selector (and the appropriate CSS) on the named Slot in
                case it is empty.
            </p>
            <div class="code">
                <FallbackContent />
            </div>
            <section>
                <Card>
                    <span q:slot="title">Qwik</span>
                    <span q:slot="body">
                        Qwik is a resumable framework for building instant web apps.
                    </span>
                </Card>
                <Card>
                    <span q:slot="title">Partytown</span>
                </Card>
                <Card>
                    <span q:slot="body">
                        Builder.io allows you to visually build on your tech stack Empower your
                        entire team to visually create and optimize high-speed experiences on your
                        sites and apps. Provide whole-team autonomy with a platform that is
                        developer approved.
                    </span>
                </Card>
            </section>
        </>
    );
});

export const CSS = `
.card {
  border-radius: 5px;
  vertical-align: top;
  display: inline-block;
  border: 1px solid grey;
  width: 200px;
  margin: .5em;
}

.title {
  background-color: lightgray;
  padding: 0.5em;
  border-bottom: 1px solid black;
}

/* Fallback for slot named "title" */
.title:empty::before {
  content: 'Fallback title';
  color: red;
}

.body {
  padding: 0.5em;
}

/* Fallback for slot named "body" */
.body:empty::after {
  content: 'Fallback body';
  color: orange;
}
`;
