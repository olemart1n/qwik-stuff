```tsx
<Resource
    value={resourceToRender}
    onPending={() => <div>Loading...</div>}
    onRejected={(reason) => <div>Error: {reason}</div>}
    onResolved={(data) => <div>{data}</div>}
/>
```
