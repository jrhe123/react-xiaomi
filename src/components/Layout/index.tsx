import { CssBaseline, ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import { createTheme } from '@mui/material/styles'
import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'

//
import Header from 'components/Header/Header'

const Layout = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const { i18n } = useTranslation()

  // TODO: move state to redux
  const onChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#000',
          },
          secondary: {
            light: '#757ce8',
            main: '#5852DA',
            dark: '#002884',
            contrastText: '#fff',
          },
        },
      }),
    [mode],
  )

  return (
    <Box
      sx={{
        bgcolor: '#EBEDF1',
        height: '100vh',
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          currentThemeMode={theme.palette.mode}
          onChangeThemeClick={colorMode.toggleColorMode}
          onChangeLanguage={onChangeLanguage}
        />
        <main>
          <Box>
            <Outlet />
          </Box>
        </main>
      </ThemeProvider>
    </Box>
  )
}

export default Layout
