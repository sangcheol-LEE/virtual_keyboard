import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Text {
   value: string
   key: string
 }

const initialState:Text  = {
   value : "",
   key: ""
}

export const textSlice = createSlice({
   name : "keyboard",
   initialState,
   reducers: {
      setTextStore : (state,action:PayloadAction<string>) => {
         state.value = action.payload
      },
      setKeyDown : (state, action:PayloadAction<string>) => {
         state.key = action.payload
      }
   }
})

export const { setTextStore,setKeyDown } = textSlice.actions;

export default textSlice.reducer

