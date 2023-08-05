import React, { useContext } from 'react'
import styles from '../styles/pages/Dashboard.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AuthContext } from '../contexts/AuthContext'

const Dashboard = (): JSX.Element => {
    const { isAuthenticated, user } = useContext(AuthContext)
    const firstName = user.first_name;
    
    return (
        <>
            <Header />
            <main className={`container-fluid`}>
                <div className='row'>
                    <h1>Dashboard</h1>
                    <p>Seja vem vindo {firstName}</p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Dashboard