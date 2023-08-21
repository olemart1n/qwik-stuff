import { createContextId } from "@builder.io/qwik";

interface TodosStore {
    items: string[];
}
export const todosContext = createContextId<TodosStore>("Todos");
