import React from 'react'
import style from "./Keyboard.module.scss";
import Row from './Row';
const Keyboard = ({getData}: {getData:[string,any,any]}) => {

   return (
      <div id={style.keyboard}>
            {getData?.map((item:[string,any],idx:number) => {
               return (
                  <Row key={idx} item={item}/>
               )
            })}
      </div>
   )
}

export default Keyboard
