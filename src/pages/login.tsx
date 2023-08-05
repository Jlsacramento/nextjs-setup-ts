import React from 'react'
import styles from '../styles/pages/Login.module.css'
import LoginComponent from '../components/Login'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Login = (): JSX.Element => {
    return (
        <div className={`${styles.container}`}>
            <Header />
            <main className={`container-fluid ${styles.heigth_without_footer}`}>
                <div className='row h-100'>
                    <div className={`col-md-6 d-none d-md-block ${styles.bg_image}`}>
                    </div>
                    <div className={`col-md-6 d-flex justify-content-center align-items-center ${styles.bg_primary}`}>
                        <LoginComponent />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Login