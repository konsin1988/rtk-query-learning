import { createSlice } from '@reduxjs/toolkit'

const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        limit: '',
    },
    reducers: {
        setLimit(state, action) {
            state.limit = action.payload
        }
    }
})

export const { setLimit } = goodsSlice.actions;
export default goodsSlice.reducer