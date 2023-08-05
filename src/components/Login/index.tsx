import React, { useContext } from 'react'
import Button from '../Button'
import InputPhone from '../InputPhone'
import InputPassword from '../InputPassword'
import styles from './style.module.css'
import { useForm, Controller } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthContext'
import { useSelector } from 'react-redux'
import { rootState } from '../../store/ducks/root'

const Login = (): JSX.Element => {
    const { user } = useSelector((state: rootState) => state.user)
    console.log('user', user);
    
    const {handleSubmit, control, formState: { errors }} = useForm()
    const { signIn } = useContext(AuthContext)

    async function handleSignIn(data) {
        console.log('data', data);
        
        await signIn(data);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(handleSignIn)}>
            <div className='form-group mb-3'>
                <Controller
                    control={control}
                    name='phone'
                    rules={{ required: 'O celular é obrigatório.' }}
                    render={({ field: { onChange } }) => (
                        <InputPhone onChange={onChange} error={errors} />
                    )}
                />
            </div>
            <div className='form-group mb-3'>
                <Controller
                    control={control}
                    name='password'
                    rules={{ required: 'A senha é obrigatória.' }}
                    render={({ field: { onChange } }) => (
                        <InputPassword onChange={onChange} error={errors} />
                    )}
                />
            </div>
            <Button type="submit" name="Entrar" />
        </form>
    )
}

export default Login