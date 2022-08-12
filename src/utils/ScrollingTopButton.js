import React from 'react';
import { 
    Fab, 
    useScrollTrigger,
    Zoom, 
    createTheme, 
    styled,
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function AccountMenu() {

    //Functions for scrolling top button
    const useStyles = createTheme(theme => ({
        root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
        }
    }));
    
    function ScrollTop(props) {
        const { children, window } = props;
        const classes = useStyles;
        const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
        });
    
        const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#top"
        );
    
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        };
    
        return (
        <Zoom in={trigger}>
            <div onClick={handleClick} className={classes.root}>
            {children}
            </div>
        </Zoom>
        );
    }

//Position of scrolling top button
    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -20,
        left: 0,
        right: 0,
        margin: '0 auto',
    });

    return (
        <ScrollTop>
            <StyledFab color="secondary" size="small" aria-label='top'>
                <KeyboardArrowUpIcon />
            </StyledFab>
        </ScrollTop>
    );
}