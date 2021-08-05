---
title: addEventListenerAll
tags: browser,event,intermediate
---

Attaches an event listener to all the provided targets.

- Use `Array.prototype.forEach()` and `EventTarget.addEventListener()` to attach the provided `listener` for the given event `type` to all `targets`.

- 将事件侦听器附加到所有提供的目标。

- 使用`Array.prototype.forEach（）`和`EventTarget.addEventListener（）`将为给定事件`type`提供的`listener`附加到所有`targets`。
  
```js
const addEventListenerAll = (targets, type, listener, options, useCapture) => {
  targets.forEach(target =>
    target.addEventListener(type, listener, options, useCapture)
  );
};
```

```js
addAllEventListeners(document.querySelectorAll('a'), 'click', () =>
  console.log('Clicked a link')
);
// Logs 'Clicked a link' whenever any anchor element is clicked
```
