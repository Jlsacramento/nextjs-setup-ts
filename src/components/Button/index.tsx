import React from 'react'
import styles from './style.module.css'

const Button = ({type, name}): JSX.Element => {
    return (
        <button type={type} className={`btn btn-primary form-control ${styles.btn_primary}`}>{name}</button>
    )
}

export default Button