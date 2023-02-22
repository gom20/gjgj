import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';

export default function Menu() {
    const [state, setState] = React.useState({
        right: false,
    });

    const [isOpen, setOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    const list = () => (
        <Box sx={250} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        {text}
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        {text}
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key="right">
                <div className="nav-icon" onClick={toggleDrawer(true)}></div>
                <Drawer anchor={'right'} open={isOpen} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
