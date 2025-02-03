```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will trigger an infinite loop because the effect
    // depends on 'count', which is modified within the effect itself.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
} 
```