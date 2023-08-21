```tsx
export function delayQrl<T>(fn: QRL<() => T>, delayInMs: number): Promise<T> {
    return new Promise((res) => {
        setTimeout(() => {
            res(fn.invoke());
        }, delayInMs);
    });
}
```
