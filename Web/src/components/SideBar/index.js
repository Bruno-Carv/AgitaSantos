import React, { useState, useEffect } from 'react';
import {
    Divider,
    AppBar,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    CssBaseline,
    Toolbar,
    Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout, getUser } from '../../services/auth';
import LogoAgitaSantos from '../../assets/logo-agitasantos.png';

import AvatarOnline from '../../components/AvatarOnline';

import { FaPowerOff, FaTheaterMasks, FaBusinessTime, FaMapMarkedAlt } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import './styles.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    tabbar: {
        backgroundColor: '#FFF',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
}));

export default function ResponsiveDrawer(props) {

    const history = useHistory();

    const { window, } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [name, setName] = useState('');
    const [action, setAction] = useState('');
    const [photo, setPhoto] = useState('https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-6.png');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const { artist } = getUser();
        setName(artist.name);
        setAction(artist.actingField);
        if (artist.photo) setPhoto(artist.photo);
    }, []);

    const signout = () => {
        try {
            logout();
            history.push('/');
            toast.success(`Deslogado com sucesso.`);
        } catch{
            toast.success(`Deslogado com sucesso.`);
        }
    }

    const drawer = (
        <div>
            <div className='d-flex justify-content-center'>
                <Link to='/artist/profile' className='m-2 mt-4'>
                    <div className='d-flex justify-content-center'>
                        <AvatarOnline src={photo} username={name} className={classes.large} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p>{name}</p>
                        <p>{action}</p>
                    </div>
                </Link>
            </div>
            <Divider />
            <List>
                <Link to={`/artist/home`}>
                    <ListItem button >
                        <ListItemIcon>
                            <FaTheaterMasks size={22} />
                        </ListItemIcon>
                        <ListItemText primary='Feed' />
                    </ListItem>
                </Link>
                <Link to={`/artist/event`}>
                    <ListItem button >
                        <ListItemIcon>
                            <FaBusinessTime size={22} />
                        </ListItemIcon>
                        <ListItemText primary='Frelencer' />
                    </ListItem>
                </Link>
                <Link to={`/artist/event`}>
                    <ListItem button >
                        <ListItemIcon>
                            <FaMapMarkedAlt size={22} />
                        </ListItemIcon>
                        <ListItemText primary='Eventos' />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <MdSettings size={22} />
                    </ListItemIcon>
                    <ListItemText primary='Configuração' />
                </ListItem>
                <ListItem button onClick={signout}>
                    <ListItemIcon>
                        <FaPowerOff size={20} />
                    </ListItemIcon>
                    <ListItemText primary='Sair' />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.tabbar}>
                    <IconButton
                        color="#000"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <Link to='/'>
                            <img src={LogoAgitaSantos} alt='Daily Online' width={140} />
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className='content-container'>
                {props.children}
            </div>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};