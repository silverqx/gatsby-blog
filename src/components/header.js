import React from 'react'
import { Link } from 'gatsby'

import s from './header.module.scss'
import logo from '../images/logo.svg'

export default () => (
    <header className={s.header}>
        <Link to="/">
            <img src={logo} alt="" className={s.logo} />
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to="/" activeClassName={s.activeNavItem}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/blog"
                        activeClassName={s.activeNavItem}
                        partiallyActive={true}
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/contact" activeClassName={s.activeNavItem}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/about" activeClassName={s.activeNavItem}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
)
