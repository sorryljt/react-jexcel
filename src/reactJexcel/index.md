---
nav:
  title: 快速开始
  path: /components
---

## ReactJexcel

Demo:

```tsx
import React, { useRef } from 'react';
import { ReactJexcel } from 'react-jexcel';

export default () => {
  const ref = useRef(null)
  const addRow = () => {
    console.log(ref.current)
    ref.current.jexcel.insertRow()
  }
  const data = [
    ['Mazda', 2001, 2000],
    ['Pegeout', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];
  return (
    <>
      <ReactJexcel
        data={data}
        rowResize={true}
        ref={ref}
      />
      <div>
        <button onClick={addRow}>addRow</button>
      </div>
    </>
  )
};
```

