import React from 'react'
import style from "./Key.module.scss";
import classNames from 'classnames';
const Key = ({item}: {item:[string,any]}) => {
   const getClassname = () => {
      if(item[0] === "Enter" || item[0] === "Cap/Lock") return "Enter"
      if(item[0] === "Shift") return "Shift"
      if(item[0] === "command") return "Command"
      if(item[0] === "Tab" || item[0] === "Backspace") return "Tab"
      if(item[0] === "spaceBar") return "Space"
   }
   return (
      <div className={classNames(style.key,style[`${getClassname()}`])}>
         <div className={style.main}>{item[0]}</div>
         <div className={style.sub}>{item[1]}</div>
      </div>
   )
}

export default Key
