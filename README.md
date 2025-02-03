# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state within the effect without proper dependency management. The `bug.js` file shows the erroneous code, resulting in an infinite loop, while `bugSolution.js` demonstrates the correct way to implement such effects.

## Bug Description:
The incorrect use of `useEffect` causes an infinite loop in the component. The state is updated within the effect without any dependencies specified, triggering continuous re-renders and updates.