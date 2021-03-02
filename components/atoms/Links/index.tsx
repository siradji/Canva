import React from 'react'

import styled from 'styled-components'

interface LinkProp {
    readonly size: string,
    readonly colour: string,
    readonly w: string
}

interface Iprops extends LinkProp {
    children: React.ReactNode
}


const index: React.FC<Iprops> = ({size, colour, w, children}: Iprops) => {
    return (
        <Link colour={colour} size={size} w={w}>
            {children}
        </Link>
    )
}

const Link = styled.a<LinkProp>`
    color: #${props => props.colour};
    font-size: ${props => props.size}rem;
    font-weight: ${props => props.w};
    display: flex;
    align-items: center;
`

export default index
