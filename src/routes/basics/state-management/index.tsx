import { component$, useStore } from "@builder.io/qwik";
import Text from "../../../md/state-management.md";
export default component$(() => {
    // `github` is just a constant object.
    // Convert it to a Store that can be serialized to JSON on application pause.
    const github = useStore({
        org: "BuilderIO",
        repos: ["qwik", "partytown"] as string[] | null,
    });

    return (
        <>
            <p>
                <label>
                    GitHub username:
                    <input
                        value={github.org}
                        onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
                    />
                </label>
            </p>
            <section>
                {github.repos ? (
                    <ul>
                        {github.repos.map((repo, i) => (
                            <li key={i}>
                                <a href={`https://github.com/${github.org}/${repo}`}>
                                    {github.org}/{repo}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    "loading..."
                )}
            </section>
            <div class="code">
                <Text />
            </div>
        </>
    );
});
