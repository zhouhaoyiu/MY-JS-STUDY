---
title: addDaysToDate
tags: date,intermediate
---

Calculates the date of `n` days from the given date, returning its string representation.

- Use `new Date()` to create a date object from the first argument.
- Use `Date.prototype.getDate()` and `Date.prototype.setDate()` to add `n` days to the given date.
- Use `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.

- 使用`new Date（）`从第一个参数创建日期对象。

- 使用`Date.prototype.getDate（）`和`Date.prototype.setDate（）`向给定日期添加`n`天。

- 使用`Date.prototype.toISOString（）`返回`yyyy-mm-dd`格式的字符串。

```js
const addDaysToDate = (date, n) => {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
};
```

```js
addDaysToDate('2020-10-15', 10); // '2020-10-25'
addDaysToDate('2020-10-15', -10); // '2020-10-05'
```
