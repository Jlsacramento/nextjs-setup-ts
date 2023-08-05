import { configureStore } from '@reduxjs/toolkit'
import user from './ducks/user'

export default configureStore({
    reducer: {
        user
    }
})