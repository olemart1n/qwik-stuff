import { createContextId } from "@builder.io/qwik";
interface Mode {
    value: boolean;
}
export const darkMode = createContextId<Mode>("darkMode");
