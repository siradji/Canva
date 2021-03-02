// CORE MODUELS
import React from 'react'
import styled from 'styled-components'


// COMPONENTS
import Link from 'components/atoms/Links'


const Header: React.FC = () => {
    return (
        <HeaderComponent>
            <HeaderInner>
                <NavLinks>
                    <Link
                        size="1.5"
                        colour="fff"
                        w="600"
                    >
                        Home
                    </Link>
                    <Link
                    size="1.5"
                    colour="fff"
                     w="600"
                >
                    Home
                </Link> <Link
                    size="1.5"
                    colour="fff"
                     w="600"
                >
                    Home
                </Link>
                </NavLinks>
               <Controls>
                   <button>Hello world</button>
               </Controls>
            </HeaderInner>
        </HeaderComponent>
    )
}

const HeaderComponent = styled.header`
background: ${props => props.theme.mainColor};
padding: 1rem 1.8rem;
overflow: hidden;
`

const HeaderInner = styled.div`
display: flex;
justify-content: space-between;
`

const NavLinks = styled.div`
display: flex;
justify-content:  space-between;
align-items: center;
flex-basis: 20%;
`


const Controls = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-basis: 60%;
justify-content: flex-end;
`

// const Overlay = styled.div`
// 	position: absolute;
// 	top: 0;
// 	width: 120%;
// 	height: 100%;
// 	-webkit-mask-image: linear-gradient(90deg,transparent 0,#000 10%);
// 	mask-image: linear-gradient(90deg,transparent 0,#000 10%);
// 	opacity: 0;
// 	transition: opacity 1s ease,-webkit-transform 7.5s ease-out;
// 	transition: opacity 1s ease,transform 7.5s ease-out;
// 	transition: opacity 1s ease,transform 7.5s ease-out,-webkit-transform 7.5s ease-out;
// `
export default Header
