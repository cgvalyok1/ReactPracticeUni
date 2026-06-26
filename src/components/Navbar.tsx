import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';

interface NavbarProps {
  active: string;
}

const menuItems = [
  { label: 'Главная', key: '1', path: '/' },
  { label: 'Список вузов', key: '2', path: '/list' },
  { label: 'Диаграммы', key: '3', path: '/chart' },
  { label: 'Проверь себя', key: '4', path: '/test' },
];

function Navbar({ active }: NavbarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #ddd', py: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none', fontSize: 20, color: '#0eb711' }}>University Explorer</Link>

          {/* Меню в виде кнопок — видно на средних экранах и шире */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item) => {
              const isActive = active === item.key;
              return (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.path}
                  sx={{
                    fontSize: isActive ? '1.1rem' : '1rem',
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? '#0eb711' : 'inherit',
                    textTransform: 'none',
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon  />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
            >
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon  />
                  </IconButton>
                </Box>
                <MenuList>
                  {menuItems.map((item) => {
                    const isActive = active === item.key;
                    return (
                      <MenuItem
                        key={item.key}
                        component={Link}
                        to={item.path}
                        onClick={toggleDrawer(false)}
                        sx={{
                          backgroundColor: isActive ? '#0eb711' : 'transparent',
                          color: isActive ? '#fff' : 'inherit',
                          fontWeight: isActive ? 'bold' : 'normal',
                          '&:hover': {
                            backgroundColor: isActive ? '#0a9c0e' : 'rgba(14, 183, 17, 0.08)',
                          },
                          transition: 'background-color 0.2s',
                        }}
                      >
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;