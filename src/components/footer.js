import React from 'react'

import useSiteMetadata from '../hooks/useSiteMetadata'

export default () => {
    const { author, email } = useSiteMetadata()

    return (
        <footer>
            Created by <a href={`mailto:${email}`}>{author}</a> © 2019
        </footer>
    )
}
