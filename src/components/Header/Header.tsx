import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { IconButton } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'
// import { useTranslation } from 'react-i18next'

type HeaderProps = {
  currentThemeMode: 'light' | 'dark'
  onChangeThemeClick: () => void
  onChangeLanguage: (lang: string) => void
}

const Header = (props: HeaderProps) => {
  // const { t } = useTranslation()
  const {
    currentThemeMode,
    onChangeThemeClick,
    // onChangeLanguage
  } = props
  return (
    <>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <nav>
            <IconButton sx={{ ml: 1 }} onClick={onChangeThemeClick} color="inherit">
              {currentThemeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
