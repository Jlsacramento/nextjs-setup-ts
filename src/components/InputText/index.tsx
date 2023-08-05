import React from 'react'
import styles from './style.module.css'

const Input = ({type, name, id, placeholder}): JSX.Element => {
    return (
        <input type={type} className={styles.input} name={name} id={id} placeholder={placeholder} />
    )
}

export default Input