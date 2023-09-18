import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import {Link as RouterLink} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

function SteamedNav() {
    const pages = [
        {name: '4Ups', href: '/SteamedColorProcessing/4ups'},
        {name: 'Time Report', href: '/SteamedColorProcessing/timeReport'},
        {name: 'Team Members', href: '/SteamedColorProcessing/teamMembers'}
    ]

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return <AppBar position="static" sx={{backgroundColor: "#1E1E1E"}}>
        <Container maxWidth="xl" >
            <Toolbar disableGutters >
                <Typography
                    variant="h6"
                    noWrap
                    component={RouterLink}
                    to={"/SteamedColorProcessing"}
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Steamed Software
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                <Typography component={RouterLink} to={page.href} textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Steamed Software
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            component={RouterLink}
                            to={page.href}
                            key={page.name}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}
export default SteamedNav