Currying is the act of turning a function into a new function that takes slightly fewer arguments, achieving a slightly more specific task.


```
f(n, m) --> f'(n)(m)
```

```
multiply = (n, m) => (n * m)
multiply(3, 4)
```

or

```
curryedMultiply = (n) => { return (m) => multiply(n, m) }
curryedMultiply(3)(4)
```
