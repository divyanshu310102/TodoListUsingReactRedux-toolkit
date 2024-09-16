import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    items : []
}


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem : (state, action) => {
            state.items.push(action.payload)
        },
        deleteItem : (state, action) => {
            state.items = state.items.filter((item) => item !== action.payload)
        }
    }

})

export const {addItem, deleteItem} = todoSlice.actions
export default todoSlice.reducer