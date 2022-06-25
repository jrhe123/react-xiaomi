import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MailIcon from '@mui/icons-material/Mail'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { Box, IconButton, Typography, Popover, Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

type HeaderProps = {
  currentThemeMode: 'light' | 'dark'
  onChangeThemeClick: () => void
  onChangeLanguage: (lang: string) => void
}

const Header = (props: HeaderProps) => {
  const [language, setLanguage] = useState<string>('English')
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const { t } = useTranslation()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'popover' : undefined
  const { currentThemeMode, onChangeThemeClick, onChangeLanguage } = props
  return (
    <>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <nav style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Box sx={{ width: 120 }}>
              <IconButton>
                <MenuBookIcon />
              </IconButton>
            </Box>
            <Box sx={{ border: '1px solid red', flex: 1 }}>search bar</Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                sx={{ boxShadow: 'none' }}
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                {language}
                <ArrowDropDownIcon />
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Box>
                  <Button
                    fullWidth
                    onClick={() => {
                      onChangeLanguage('en')
                      setLanguage(t('navigation.language-list.en'))
                      handleClose()
                    }}
                  >
                    <Typography sx={{ p: 1, color: '#000' }}>
                      {t('navigation.language-list.en')}
                    </Typography>
                  </Button>
                </Box>
                <Box>
                  <Button
                    fullWidth
                    onClick={() => {
                      onChangeLanguage('fr')
                      setLanguage(t('navigation.language-list.fr'))
                      handleClose()
                    }}
                  >
                    <Typography sx={{ p: 1, color: '#000' }}>
                      {t('navigation.language-list.fr')}
                    </Typography>
                  </Button>
                </Box>
              </Popover>
              <IconButton sx={{ ml: 1 }} onClick={onChangeThemeClick} color="inherit">
                {currentThemeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton color="inherit">
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#f44336',
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'absolute',
                      right: -10,
                      top: -5,
                    }}
                  >
                    <Typography variant="caption" component="span" sx={{ color: 'white' }}>
                      3
                    </Typography>
                  </Box>
                  <MailIcon sx={{ marginTop: '1px' }} />
                </Box>
              </IconButton>
              <IconButton sx={{ ml: 3, p: 0, border: '0.3px solid #c4c4c4' }}>
                <Box
                  component="img"
                  sx={{
                    height: 36,
                    width: 36,
                    borderRadius: '50%',
                  }}
                  alt="Avatar"
                  src="https://avatars.githubusercontent.com/u/17329299?v=4"
                />
              </IconButton>
            </Box>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
