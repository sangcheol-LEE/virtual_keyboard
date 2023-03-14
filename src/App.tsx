import React,{useState,useEffect} from 'react'
import Axios,{AxiosResponse} from "axios";
import Keyboard from './components/Keyboard';
import Input from './components/Input';
import Menu from './components/Menu';
import style from "./App.module.scss";

const App = () => {
  const [getData, setData] = useState<[string,any]| any>();
   const handleData = async() => {
      try{
         const response = await Axios.get<string[]>("../data/data.json")
         .then((res:AxiosResponse) => {
            setData((prev:any) => {
               prev = res.data
               return prev
            })
         })
         return response
      }catch(e) {
         console.log(e)
      }
   }
   useEffect(() => {
      handleData()
   },[])

  return (
    <div className={style.container}>
      <Menu />
      <Input />
      <Keyboard getData={getData}/>
    </div>
  )
}

export default App
