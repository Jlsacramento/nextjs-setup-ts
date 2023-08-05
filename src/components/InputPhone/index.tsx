import { NextPage } from 'next'
import React from 'react'
import styles from './style.module.css'

interface Props {
    onChange: any
    error: any
}

const InputPhone: NextPage<Props> = ({ onChange, error }): JSX.Element => {
    return (
        <div className='input-error'>
            <input type='number' className={styles.input} name='phone' id='phone' placeholder='Celular' onChange={e => onChange(e)} />
            {error['phone'] && <span role='alert'>{error['phone'].message}</span>}
        </div>
    )
}

export default InputPhone