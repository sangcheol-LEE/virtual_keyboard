import React from 'react'
import style from "./Input.module.scss";

const Input = () => {
   return (
         <div className={style.input_group} id={style.input_group}>
            <input id={style.input} className={style.input} type="text" autoComplete="off" />
            <div className={style.error_message}>한글 입력 불가</div>
        </div>
   )
}

export default Input
