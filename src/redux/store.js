import { configureStore } from '@reduxjs/toolkit'
import { goodsApi } from './goodsApi'
import goodsSliceReducer from './slices/goodsSlice'

export const store = configureStore({
    reducer: {
        [goodsApi.reducerPath]: goodsApi.reducer,
        goods: goodsSliceReducer
    },
    middleware: ( getDefaultMiddleware ) => (
        getDefaultMiddleware().concat(goodsApi.middleware)
    )
})