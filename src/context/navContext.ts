import { createContextId } from "@builder.io/qwik";
import { type LinkItem } from "~/lib/sub-header-links";
export const navItems = createContextId<LinkItem[]>("navigation");
export const headerOne = createContextId<StringValue>("topHeader");
export const headerTwo = createContextId<StringValue>("secondHeader");

interface StringValue {
    value: string;
}
