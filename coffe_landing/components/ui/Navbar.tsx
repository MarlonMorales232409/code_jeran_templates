import NextLink from "next/link"
import Image from "next/image"
import { menuItems } from '../../utils';

import { AppBar, Grid, Link, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



export const Navbar = () => {
    return (
        <AppBar className="blur-nav" >
            <Toolbar >
                <NextLink href="/" passHref>
                    <Link>
                        <Image src={"/logo.png"} alt="logo" width={150} height={150} />
                    </Link>
                </NextLink>
                <Box flex={.5} />
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {
                        menuItems.map(item => (
                            <NextLink href={item.url} passHref key={item.title}>
                                <Link underline="none">
                                    <Button variant="text">{item.title}</Button>
                                </Link>
                            </NextLink>
                        ))
                    }
                </Box>
                <Box flex={1} />
                <IconButton sx={{ display: { xs: "block", sm: "none" }, mr: 4 }}>
                    <MenuIcon color="primary" />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
