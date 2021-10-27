## React-Jexcel

### 简介

基于[jspreadsheet v4](https://bossanova.uk/jspreadsheet/v4/)版本，封装的React 版本的轻量级Excel插件，开箱即用，配置简单，极大的方便了React开发着对于excel或者报表的使用需求，本插件将提供完善的demo和中文文档...

文档和demo将不断完善，欢迎大家PR👏

### 快速开始

#### 安装

```shell
yarn add React-Jexcel
// or
npm instll React-Jexcel
```

#### 在项目中使用

```tsx
import React, { useRef } from 'react';
import { ReactJexcel } from 'react-jexcel';

export default () => {
  const ref = useRef(null)
  const addRow = () => {
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

#### 效果截图

![](https://upload-images.jianshu.io/upload_images/18029972-e4c06c0bf0ca48f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 属性(Props)

| 属性名        | 含义           | 类型                                                         |
| ------------- | -------------- | ------------------------------------------------------------ |
| data          | 表格数据       | `Array`,eg:[[1,2,3,4]]                                       |
| columns       | 列信息         | 见下方`列信息`                                               |
| rowResize     | 是否可调整行高 | `boolean`                                                    |
| rows          | 初始列信息     | `object`eg:{3: {height: '300px'}},代表第3列300px高           |
| minDimensions | 表格最小尺寸   | [cols, rows]                                                 |
| allowExport   | 是否允许导出   | `boolean`,为`true`时，`ctrl` +` s`可导出                     |
| columnDrag    | 是否允许列拖动 | `boolean`,为`true`时，可拖动列头交换列顺序                   |
| 其他属性      | 待完善中文文档 | 可参照原本英文文档属性[props](https://bossanova.uk/jspreadsheet/v4/docs/quick-reference) |

### 方法(methods)

本组件支持`ref`直接调用其方法，全部方法待完善中文文档，如需，可自行到官网查找，直接调用即可

| 方法名    | 作用         | 备注                                                |
| --------- | ------------ | --------------------------------------------------- |
| insertRow | 新增一行     | `myTable.insertRow([mixed], [integer], [boolean]);` |
| deleteRow | 删除一行     | `myTable.deleteRow([integer], [integer]);`          |
| getData   | 获取表格数据 | myTable.getData([bool]);                            |

### 贡献者

[sorryljt](https://github.com/sorryljt)

欢迎大家提PR
