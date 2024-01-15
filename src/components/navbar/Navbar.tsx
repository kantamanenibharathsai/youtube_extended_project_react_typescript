import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import navbarStyles from './Navbar.Styles';
import YouTubeLogo from "../../assets/youtubeLogo.png";
import { ReactComponent as CreateLogo } from '../../assets/create.svg';
import { ReactComponent as GroupLogo } from '../../assets/group.svg';
import { ReactComponent as NotificationsLogo } from '../../assets/notifications.svg';
import { ReactComponent as HomeFillLogo } from '../../assets/homeFill.svg';
import { Divider, Drawer,Stack } from '@mui/material';


interface Props {
    window?: () => Window;
}

interface IState {
    enterRestaurantNameOrFoddname: string
}

const Navbar: React.FC<Props> = (props: Props) => {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const renderSearchContainer = () => {
        return (
            <Box sx={navbarStyles.searchContainer}>
                <Box component="input" placeholder='Search' sx={navbarStyles.inputSearchBar} />
                <Box sx={navbarStyles.searchIconContainer}>
                    <SearchIcon sx={navbarStyles.searchIcon} />
                </Box>
            </Box>
        )
    }

    const renderUnorderedList = () => {
        return (
            <Stack sx={navbarStyles.unorderedStack}>
                {["Home", "Explore", "Trending", "subscriptions", "Library", "History", "Your Videos", "Watch Later "].map(eachSection => (
                    <Box sx={navbarStyles.listContainer} key={eachSection}>
                        <HomeFillLogo />
                        <Typography sx={navbarStyles.homeText}>{eachSection}</Typography>
                    </Box>))}
            </Stack>
        )
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={navbarStyles.drawerContainer}>
            <Box sx={navbarStyles.searchnavbarContainer}>
            <Box sx={{ ...navbarStyles.searchContainer, display: { xs: "flex", md: "none" } }}>
                <Box component="input" placeholder='Search' sx={navbarStyles.inputSearchBar} />
                <Box sx={navbarStyles.searchIconContainer}>
                    <SearchIcon sx={navbarStyles.searchIcon} />
                </Box>
            </Box>
            </Box>
            <Divider />
            {renderUnorderedList()}
        </Box>
    );

    return (
        <Box>
            <AppBar sx={navbarStyles.appbar}>
                <Toolbar sx={navbarStyles.toolbar}>
                    <Box sx={navbarStyles.logoContainer}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box component="img" src={YouTubeLogo} sx={navbarStyles.youtubeLogo} alt="youtube-logo" />
                    </Box>
                    {renderSearchContainer()}
                    <Box sx={navbarStyles.navbarRightSideIconsContainer}>
                        <IconButton size="small" color="inherit">
                            <CreateLogo />
                        </IconButton>
                        <IconButton
                            size="small"
                            color="inherit"
                        >
                            <GroupLogo />
                        </IconButton>
                        <IconButton
                            size="small"
                            edge="end"
                            color="inherit"
                        >
                            <NotificationsLogo />
                        </IconButton>
                        <IconButton
                            size="small"
                            edge="end"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={navbarStyles.drawerComponent}
                    >
                        {drawer}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar