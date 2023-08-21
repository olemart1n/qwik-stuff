import { createContextId } from "@builder.io/qwik";

export interface TodosStore {
    items: string[];
}
export const todosContext = createContextId<TodosStore>("Todos");
