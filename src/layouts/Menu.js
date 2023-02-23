import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { Link } from 'react-scroll';

export default function Menu() {
    const [isOpen, setOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    const list = () => (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                <ListItem key={'intro'}>
                    <div className="page-link">
                        <Link activeClass="active" className="test1" to="intro" spy={true} smooth={true} duration={500}>
                            Intro
                        </Link>
                    </div>
                </ListItem>

                <ListItem key={'about'}>
                    <div className="page-link">
                        <Link activeClass="active" className="test2" to="about" spy={true} smooth={true} duration={500}>
                            About
                        </Link>
                    </div>
                </ListItem>

                <ListItem key={'apply'}>
                    <div className="page-link">
                        <Link activeClass="active" className="test2" to="apply" spy={true} smooth={true} duration={500}>
                            Apply
                        </Link>
                    </div>
                </ListItem>

                <ListItem key={'contact'}>
                    <div className="page-link">
                        <Link activeClass="active" className="test2" to="contact" spy={true} smooth={true} duration={500}>
                            Contact
                        </Link>
                    </div>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key="right">
                <MenuIcon className="menu-icon" onClick={toggleDrawer(true)}></MenuIcon>
                <Drawer anchor={'right'} open={isOpen} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
