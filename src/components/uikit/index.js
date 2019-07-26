import React from 'react'
import LinkRouter from 'redux-first-router-link'

export const Link = (props) => {
    const { children, to = '/', ...rest } = props
    return <LinkRouter to={to} {...rest}>{children}</LinkRouter>
}
