import Image from 'next/image'
import React from 'react'
import styles from './style.module.css'
import logotipo from '../../../public/assets/images/logotipo-pizzaria.png'

const Header = (): JSX.Element => {
    return (
        <header className={`${styles.header}`}>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.nav_bar}`}>
                <a className={`navbar-brand ${styles.brand}`} href="#">
                    <Image
                        src={logotipo}
                        width={65}
                        height={65}
                    />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav mr-auto ${styles.ml_auto}`}>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sair</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header