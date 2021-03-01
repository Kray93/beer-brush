import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        zIndex: 9
    },
    paper: {
        marginRight: theme.spacing(2),
    },
})); 

export default function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);
    const history = useHistory();
    const clickGallery = (e) => {
        e.preventDefault();
        history.push("/gallery");
        handleClose();
    }
    const clickAbout = (e) => {
        e.preventDefault();
        history.push("/about");
        handleClose();
    }
    const clickClasses = (e) => {
        e.preventDefault();
        history.push("/classes");
        handleClose();
    }
    const clickHome = (e) => {
        e.preventDefault();
        history.push("/home");
        handleClose();
    }
    const clickInstructor = (e) => {
        e.preventDefault();
        history.push("/instructor");
        handleClose();
    }
    return (
        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <MenuIcon style={{ color: grey[50] }}/>
        </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={clickGallery}>Gallery</MenuItem>
                                        <MenuItem onClick={clickAbout}>About Us</MenuItem>
                                        <MenuItem onClick={clickClasses} >Classes</MenuItem>
                                        <MenuItem onClick={clickHome} >Home</MenuItem>
                                        <MenuItem onClick={clickInstructor} >Instructor</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}