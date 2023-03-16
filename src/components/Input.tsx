import React ,{useState,useEffect}from 'react'
import { useDispatch } from 'react-redux';
import style from "./Input.module.scss";
import { setTextStore,setKeyDown } from '../features/input';

const Input = () => {
   const dispatch = useDispatch();
   const [text, setText] = useState<string>("");
   const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setText((prev) => {
         prev = e.target.value
         return prev
      })
      dispatch(setTextStore(text))
   }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      dispatch(setKeyDown(e.code))
   }
   const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
      dispatch(setKeyDown(""))
   }
   useEffect(() => {
      dispatch(setTextStore(text))
   },[dispatch,text])

   return (
         <div className={style.input_group} id={style.input_group}>
            <input id={style.input} className={style.input} type="text" value={text} placeholder={text} onChange={handleChange} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} autoComplete="off" />
        </div>
   )
}

export default Input
