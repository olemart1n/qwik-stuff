```ts
declare function delayQrl<T>(fn: QRL<() => T>, delayInMs: number): Promise<T>;
declare function delay$<T>(fn: () => T, delayInMs: number): Promise<T>;
```

The above allows us to use delay$ in an inlined fashion, but the Optimizer converts the delay$ to delayQrl form.
NOTE the two methods must have the same prefix. So a general form is:

```ts
export const SOME_NAME_Qrl = ...;
export const SOME_NAME_$ = implicit$FirstArg(SOME_NAME_Qrl);
```
