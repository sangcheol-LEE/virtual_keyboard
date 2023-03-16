import React from 'react'
import style from "./Key.module.scss";
import classNames from 'classnames';
import {useSelector} from "react-redux";
import { RootState } from '../app/store';

const Key = ({item}: {item:[string,any,any]}) => {
   const state = useSelector((state:RootState) => state)
   const getClassname = () => {
      if(item[0] === "Enter" || item[0] === "Cap/Lock") return "Enter"
      if(item[0] === "Shift") return "Shift"
      if(item[0] === "command") return "Command"
      if(item[0] === "Tab" || item[0] === "Backspace") return "Tab"
      if(item[0] === "spaceBar") return "Space"
   }
   const getKey = () => {
      if(item[2] === state.text.key) {
         return "keyValue"
      }
   }
   return (
      <div className={classNames(style.key,style[`${getClassname()}`],style[`${getKey()}`]) }>
         <div className={style.main}>{item[0]}</div>
         <div className={style.sub}>{item[1]}</div>
      </div>
   )
}
export default Key
