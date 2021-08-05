---
title: accumulate 积累
tags: math,array,intermediate 数学、数组、中间值
---

Creates an array of partial sums.

- Use `Array.prototype.reduce()`, initialized with an empty array accumulator to iterate over `nums`.
- Use `Array.prototype.slice(-1)`, the spread operator (`...`) and the unary `+` operator to add each value to the accumulator array containing the previous sums.

创建部分和数组。

-使用“Array.prototype.reduce（）”，使用空数组累加器初始化以迭代“nums”。

-使用`Array.prototype.slice（-1）`、扩展运算符（`…`）和一元`+`运算符将每个值添加到包含先前总和的累加器数组中。

```js
const accumulate = (...nums) =>
  nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []);
```

```js
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
```
