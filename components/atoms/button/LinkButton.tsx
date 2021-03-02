import React, { Children, FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
colour: string
}

interface Iprops extends ButtonProps {
children: ReactNode
}

const LinkButton:FC<Iprops> = ({colour, children}: Iprops) => {
    return (
        <Button colour={colour}>
            {children}
        </Button>
    )
}

const Button = styled.a<ButtonProps>`
    color: #${props => props.colour};
    font-size: 1.5rem;
    display: flex;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    padding:10px 15px;
    text-overflow: ellipsis;
    border-radius: 5px; 
    background: transparent;
    margin: 0 5px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.15);
        cursor: pointer;
    }
`




export default LinkButton
