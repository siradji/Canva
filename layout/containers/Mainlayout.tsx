import React from 'react';

import { createGlobalStyle, ThemeProvider } from "styled-components";

import Theme from 'styles/theme'

interface Iprops  {
    children: React.ReactNode
}

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html, body {
    font-size: 10px;
}
`

const MainLayout: React.FC<Iprops>  = ({children}: Iprops) => {
    return (
        <>
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
        </>
    )
}

export default MainLayout;