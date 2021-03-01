// CORE MODUELS
import React from 'react'
import styled from 'styled-components'


// COMPONENTS
import Link from 'components/atoms/Links'


const Header: React.FC = () => {
    return (
        <HeaderComponent>
            <HeaderInner>
                <Link
                    size="1.2"
                    colour="fff"
                     w="700"
                >
                    Home
                </Link>
            </HeaderInner>
        </HeaderComponent>
    )
}

const HeaderComponent = styled.header`
background: ${props => props.theme.mainColor};
padding: 1rem 1.8rem;
`

const HeaderInner = styled.div`
display: flex;
justify-content: space-between;
`
export default Header
