import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'

import api, { recoverUserInformation } from "../services/api";
import { Types as UserTypes } from '../store/ducks/user'
import { rootState } from '../store/ducks/root'

export type User = {
    firt_name: string;
    last_name: string;
    phone: string;
    email: string;
    position: string;
    store: string;
}

type SignInData = {
    phone: 'string';
    password: 'string';
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>;
}

type SessionData = {
    user: any;
    token: string;
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    // const { user } = useSelector((state: rootState) => state.user)
    const [user, setUser] = useState<User | null>(null)
    const isAuthenticated = !!user;
    const dispatch = useDispatch();

    useEffect(() => {        
        const { 'smartmenu.token': token } = parseCookies()

        if (token) {
            recoverUserInformation().then(response => {
                console.log('response custom: ', response.user.first_name);
                const {user} = response;
                
                setUser(user)
            })
        }
    }, [])

   async function signIn({phone, password}: SignInData) {
       const response = await api.post('/sessions', {
           phone,
           password
       })
       
       const token = response.data.token;
       const user = response.data.user;
       console.log('userContext: ', user);
       

       setCookie(undefined, 'smartmenu.token', token, {
           maxAge: 60 * 60 * 1, // 1 hour
       })

       api.defaults.headers['Authorization'] = `Bearer ${token}`

    //    dispatch({ type: UserTypes.USER, user: user })
        setUser(user)

       Router.push('/dashboard')
   }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}