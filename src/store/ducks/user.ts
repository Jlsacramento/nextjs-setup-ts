import { AnyAction } from 'redux'

export interface userState {
    user: any
}

export const Types = {
    USER: 'USER'
}

const INITIAL_STATE: userState = {
    user: ''
}

const user = (state = INITIAL_STATE, action: AnyAction): userState => {
    switch (action.type) {
        case Types.USER:
            return { ...state, user: action.user }
    
        default:
            return state;
    }
}

export default user