import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <div className={`modal-display ${menu ? 'active' : ''}`}></div>
            <section className="navbar">
                <main className="nav__container">
                    <NavLink to='/' className='nav__logo'>Movie Rated</NavLink>
                    <nav className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__list-item">
                                <NavLink className="nav__link" to={'/'}>Popular</NavLink>
                            </li>
                            <li className="nav__list-item">
                                <NavLink className="nav__link" to={'/toprated'}>Best Movie</NavLink>
                            </li>
                            <li className="nav__list-item">
                                <NavLink className="nav__link" to={'/upcoming'}>Up Coming</NavLink>
                            </li>
                        </ul>
                    </nav>
                </main>
            </section>
        </>
    )
}

export default Navbar