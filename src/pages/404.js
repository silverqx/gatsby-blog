import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

const NotFound = () => (
    <Layout>
        <Head title="404 Not Found" />
        <h1>Page to Found</h1>
        <p>
            <span>Go to </span>
            <Link to="/">HomePage</Link>
        </p>
    </Layout>
)

export default NotFound
