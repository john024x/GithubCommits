import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ResponsiveAppBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ display: { md: 'flex' } }}
                    >Commit history
                </Typography>
            </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
