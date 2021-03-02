import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
    readonly size: string,
    readonly color: string,
    readonly bgColor: string
}

interface IProps extends ButtonProps {
    children: React.ReactNode;
}

const ButtonComponent: React.FC<IProps> = ({size, color, bgColor, children}: IProps) => {
    return (
        <Button
            size={size}
            color={color}
            bgColor={bgColor}
        >
            {children}
        </Button>
    )
}

const Button = styled.button<ButtonProps>`
display: flex;
align-items: center;
outline: none;
border: none;


font-size: ${props => props.size}em;
color: ${props => props.color};
background-color: ${props => props.bgColor};
`

export default ButtonComponent
