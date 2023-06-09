import React from 'react'
import style from "./Row.module.scss";
import Key from './Key';

const Row = ({item}:{item:[string,any,any][]}) => {

   return (
      <div className={style.row}>
         {item.map((item:[string,any,any],idx:number) => {
            return (
               <Key item={item} key={idx}/>
            )
         })}
      </div>
   )
}

export default Row
