import React from 'react'

import Footer from './footer'
import Header from './header'

import '../styles/index.scss'
import s from './layout.module.scss'

const Layout = props => (
    <div className={s.container}>
        <div className={s.content}>
            <Header />
            {props.children}
        </div>
        <Footer />
    </div>
)

export default Layout
