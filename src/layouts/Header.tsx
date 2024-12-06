import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  InputBase,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { path } from '../routes/Routers';
import siteLogo from '../assets/siteLogo.svg';
import I18n from '../components/I18n';

const Header = () => {
  const cartItems = useSelector((state: any) => state.product.cart);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const toggleDrawer = (open: boolean) => setOpenDrawer(open);
  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const renderMenu = () => (
    <Drawer
      anchor='left'
      open={openDrawer}
      onClose={() => toggleDrawer(false)}
    >
      <List sx={{ width: 250 }}>
        <ListItem
          component={Link}
          to={path.HOME}
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem
          component={Link}
          to={path.CATEGORY}
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary='Categories' />
        </ListItem>
        <ListItem
          component={Link}
          to={path.CART}
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary='Cart' />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar
      position='fixed'
      sx={{ backgroundColor: '#fff', boxShadow: 3 }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 3,
              cursor: 'pointer',
            }}
            onClick={() => navigate(path.HOME)}
          >
            <img
              src={siteLogo}
              alt='site logo'
              style={{ width: 100 }}
            />
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              flex: 1,
            }}
          >
            <InputBase
              sx={{
                backgroundColor: '#f0f0f0',
                borderRadius: 2,
                paddingLeft: 2,
                width: '97%',
                height: '40px',
              }}
              placeholder='Search for products'
              startAdornment={<SearchIcon sx={{ color: 'grey' }} />}
            />
          </Box>

          {/* Mobile Menu Icon */}
          <Box
            sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}
          >
            <IconButton
              onClick={() => toggleDrawer(true)}
              sx={{ color: '#000' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Navigation Links (for Desktop) */}

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              marginRight: 2,
            }}
          >
            {/* Language Dropdown */}
            <I18n />
            {/* Add Profile */}
            <Typography
              variant='body1'
              component={'div'}
              sx={{
                display: 'flex',
                color: '#000',
                fontWeight: 500,
                marginRight: 2,
                marginLeft: 1,
                cursor: 'pointer',
              }}
              onClick={handleProfileClick}
            >
              <AccountCircleOutlinedIcon />
              <span style={{ paddingLeft: '10px' }}> Profile </span>
            </Typography>
            {/* Menu Component */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'profile-button',
              }}
            >
              <MenuItem onClick={handleCloseMenu}>My Profile</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Orders</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Wishlist</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Address</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Notifications</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
            </Menu>
            {/* Cart Count */}
            <Link
              to={path.CART}
              style={{ textDecoration: 'none', marginRight: 20 }}
            >
              <IconButton sx={{ color: '#000' }}>
                <Badge
                  badgeContent={cartItems.length}
                  color='error'
                >
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>

      {renderMenu()}
    </AppBar>
  );
};

export default Header;
