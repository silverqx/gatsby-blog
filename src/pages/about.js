import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

export default () => (
    <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>
            Hello I'm Silver and I'm a fullstack web developer, you can check my
            github profile at{' '}
            <a
                href="https://github.com/silverqx"
                target="_blank"
                rel="noopener noreferrer"
            >
                silverqx
            </a>
            .
        </p>
        <p>
            Need a developer? <Link to="/contact">Contact me</Link>
        </p>
    </Layout>
)
