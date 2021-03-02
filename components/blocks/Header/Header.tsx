// CORE MODUELS
import React from 'react'
import styled from 'styled-components'


// COMPONENTS
import Link from 'components/atoms/Links'
import { LinkButton, SolidButton, TransparentButton } from 'components/atoms/button'


const Header: React.FC = () => {
    return (
        <HeaderComponent>
            <HeaderInner>
                <NavLinks>
                    <LinkButton
                        colour="fff"
                    >
                        Home
                    </LinkButton>
                    <LinkButton
                        colour="fff"
                    >
                        File
                    </LinkButton>
                    <LinkButton
                        colour="fff"
                    >
                        Resize
                    </LinkButton>
                </NavLinks>
               <Controls>
                  <TransparentButton colour="fff">
                      Try Canva pro
                  </TransparentButton>
                  <TransparentButton colour="fff">
                      Share
                  </TransparentButton>
                  <SolidButton colour="000" >
                  <i className="fas fa-long-arrow-alt-down"></i> Download
                  </SolidButton>
                  <SolidButton colour="000" >
                  <i className="fas fa-ellipsis-h" style={{padding: "4px 0"}}></i> 
                  </SolidButton>
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
align-items: center;


`


const Controls = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;

& * {
    margin: 0 5px;
}
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
