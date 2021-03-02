import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
    colour: string
}

interface Iprops extends ButtonProps {
    children: ReactNode
}

const TransparentButton: FC<Iprops> = ({colour, children}: Iprops) => {
    return (
        <Button colour={colour}>
            {children}
        </Button>
    )
}


const Button  =styled.a<ButtonProps>`
display: flex;
align-items: center;
outline: none;
border: none;
font-size: 1.5rem;
padding: 10px 15px;
color: #${props => props.colour};
background-color: rgba(255,255,255, 0.15);

&:hover {
    background-color: rgba(255,255,255, 0.2);
    cursor: pointer;
}
`



export default TransparentButton
