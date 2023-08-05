import React from 'react'
import styles from './style.module.css'

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className="container-fluid">
                <p className={styles.text}><span>Desenvolvido por <a href="" className={styles.link}>Smart Menu</a></span></p>
            </div>
        </footer>
    )
}

export default Footer