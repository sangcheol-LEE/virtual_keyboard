import React from 'react'
import style from "./Menu.module.scss";

const Menu = () => {
   return (
      <div className={style.menu}>
         <label className={style.switch}>
               <input id={style.switch} type="checkbox" />
               <span className={style.slider}></span>
         </label>
         <div className={style.select_box}>
               <label htmlFor="font">Font:</label>
               <select id={style.font}>
                  <option value="" disabled selected>Choose Font</option>
                  <option value="Comic Sans MS, Comic Sans, cursive">Font 1</option>
                  <option value="Arial Narrow, sans-serif">Font 2</option>
                  <option value="Chalkduster, fantasy">Font 3</option>
               </select>
         </div>
      </div>
   )
}

export default Menu
