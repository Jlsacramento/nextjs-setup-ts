import React from 'react'
import styles from './style.module.css'

interface Props {
    onChange: any
    error: any
}

const InputPassword = ({onChange, error}): JSX.Element => {
    return (
        <div className='input-error'>
            <input type='password' className={styles.input} name='password' id='password' placeholder='Senha' onChange={e => onChange(e)} />
            {error['password'] && <span role='alert'>{error['password'].message}</span>}
        </div>
    )
}

export default InputPassword