import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { ColorsTheme, GlobalStyle } from './styles/global'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
      <ThemeProvider theme={ColorsTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
)
