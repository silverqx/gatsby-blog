import React from 'react'
import { Link } from 'gatsby'

import s from './header.module.scss'

export default () => (
    <header className={s.header}>
        <nav>
            <ul>
                <li>
                    <Link to="/" activeClassName={s.activeNavItem}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/blog" activeClassName={s.activeNavItem}>
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
