import React, { forwardRef, useEffect } from 'react'
import jspreadsheet from "jspreadsheet-ce";
import "../../node_modules/jspreadsheet-ce/dist/jspreadsheet.css"

export type sourceType = {
  id?: any,
  name?: string
}

export type columnsType = {
  /** 列类型  */
  type?: 'text' | 'numeric' | 'hidden' | 'dropdown' | 'autocomplete' | 'checkbox' | 'radio' | 'calendar' | 'image' | 'color' | 'html',
  /** 列标题 */
  title?: string
  /** 列宽 */
  width?: number
  /** 列对其方式 */
  align?: 'center' | 'left' | 'right'
  /** 当`type='dropdown'时的`下拉选项 */
  source?: string[] | sourceType[]
  [propName: string]: any;
}

export interface ReactJexcelProps extends HTMLDivElement {
  /** 表格数据，二维数组格式，[[]]*/
  data: any[]
  /** 列信息 */
  columns?: columnsType[]
  /** 是否可调整行高 */
  rowResize: boolean
  /** 初始行信息，宽度等 */
  rows: any
  /** 表格最小尺寸 */
  minDimensions: number[]
  /** 是否允许导出 */
  allowExport: boolean
  /** 是否允许列拖动 */
  columnDrag: boolean
  [propName: string]: any;
}

const ReactJexcel:React.ForwardRefRenderFunction<ReactJexcelProps, any> = (props, ref) => {
  useEffect(() => {
    const {
      data=[[]],
      columns=[],
      rowResize=false,
      minDimensions=[10, 10],
      ...rest
    } = props
    jspreadsheet((document.getElementById('jspreadsheet') as any), {
      data,
      columns,
      minDimensions,
      rowResize,
      ...rest,
    })
  }, [props])
  return (
    <div ref={ref} id="jspreadsheet"></div>
  )
}

export default forwardRef(ReactJexcel)