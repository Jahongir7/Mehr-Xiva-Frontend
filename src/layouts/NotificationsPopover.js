import faker from 'faker';
import PropTypes from 'prop-types';
import {noCase} from 'change-case';
import {useRef, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {formatDistanceToNow, set, sub} from 'date-fns';
import {Icon} from '@iconify/react';
import bellFill from '@iconify/icons-eva/bell-fill';
import clockFill from '@iconify/icons-eva/clock-fill';
import doneAllFill from '@iconify/icons-eva/done-all-fill';
// material
import {alpha} from '@mui/material/styles';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    IconButton,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Tooltip,
    Typography
} from '@mui/material';
// utils
import {mockImgAvatar} from '../utils/mockImages';
// components
import Scrollbar from '../components/Scrollbar';
import MenuPopover from '../components/MenuPopover';

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
    {
        id: faker.datatype.uuid(),
        title: 'Yangi talaba qo\u2018shildi',
        description: 'Yotoqxonada turadi',
        avatar: null,
        type: 'order_placed',
        createdAt: set(new Date(), {hours: 10, minutes: 30}),
        isUnRead: true
    },
    {
        id: faker.datatype.uuid(),
        title: 'Yangi talaba qo‘shildi',
        description: '5 ta o\u2018qilmagan xat',
        avatar: null,
        type: 'chat_message',
        createdAt: sub(new Date(), {days: 1, hours: 3, minutes: 30}),
        isUnRead: false
    }
];

function renderContent(notification) {
    const title = (
        <Typography variant="subtitle2">
            {notification.title}
            <Typography component="span" variant="body2" sx={{color: 'text.secondary'}}>
                &nbsp; {noCase(notification.description)}
            </Typography>
        </Typography>
    );

    if (notification.type === 'order_placed') {
        return {
            avatar: <img alt={notification.title} src="/static/icons/ic_notification_package.svg"/>,
            title
        };
    }
    if (notification.type === 'order_shipped') {
        return {
            avatar: <img alt={notification.title} src="/static/icons/ic_notification_shipping.svg"/>,
            title
        };
    }
    if (notification.type === 'mail') {
        return {
            avatar: <img alt={notification.title} src="/static/icons/ic_notification_mail.svg"/>,
            title
        };
    }
    if (notification.type === 'chat_message') {
        return {
            avatar: <img alt={notification.title} src="/static/icons/ic_notification_chat.svg"/>,
            title
        };
    }
    return {
        avatar: <img alt={notification.title} src={notification.avatar}/>,
        title
    };
}

NotificationItem.propTypes = {
    notification: PropTypes.object.isRequired
};

function NotificationItem({notification}) {
    const {avatar, title} = renderContent(notification);

    return (
        <ListItemButton
            to="#"
            disableGutters
            component={RouterLink}
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',
                ...(notification.isUnRead && {
                    bgcolor: 'action.selected'
                })
            }}
        >
            <ListItemAvatar>
                <Avatar sx={{bgcolor: 'background.neutral'}}>{avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <Typography
                        variant="caption"
                        sx={{
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.disabled'
                        }}
                    >
                        <Box component={Icon} icon={clockFill} sx={{mr: 0.5, width: 16, height: 16}}/>
                        {formatDistanceToNow(new Date(notification.createdAt))}
                    </Typography>
                }
            />
        </ListItemButton>
    );
}

export default function NotificationsPopover() {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [notifications, setNotifications] = useState(NOTIFICATIONS);
    const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                isUnRead: false
            }))
        );
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                size="large"
                color={open ? 'primary' : 'default'}
                onClick={handleOpen}
                sx={{
                    ...(open && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
                    })
                }}
            >
                <Badge badgeContent={totalUnRead} color="error">
                    <Icon icon={bellFill} width={20} height={20}/>
                </Badge>
            </IconButton>

            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                sx={{width: 360}}
            >
                <Box sx={{display: 'flex', alignItems: 'center', py: 2, px: 2.5}}>
                    <Box sx={{flexGrow: 1}}>
                        <Typography variant="subtitle1">Bildirishnomalar</Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Sizda {totalUnRead} ta o&#8216;qilmagan xabar bor
                        </Typography>
                    </Box>

                    {totalUnRead > 0 && (
                        <Tooltip title=" Mark all as read">
                            <IconButton color="primary" onClick={handleMarkAllAsRead}>
                                <Icon icon={doneAllFill} width={20} height={20}/>
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>

                <Divider/>

                <Scrollbar sx={{height: {xs: 340, sm: 'auto'}}}>
                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{py: 1, px: 2.5, typography: 'overline'}}>
                                Yangi
                            </ListSubheader>
                        }
                    >
                        {notifications.slice(0, 2).map((notification) => (
                            <NotificationItem key={notification.id} notification={notification}/>
                        ))}
                    </List>

                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{py: 1, px: 2.5, typography: 'overline'}}>
                                Bundan oldingilar
                            </ListSubheader>
                        }
                    >
                        {notifications.slice(2, 5).map((notification) => (
                            <NotificationItem key={notification.id} notification={notification}/>
                        ))}
                    </List>
                </Scrollbar>

                <Divider/>

                <Box sx={{p: 1}}>
                    <Button fullWidth disableRipple component={RouterLink} to="#">
                        Hammasi
                    </Button>
                </Box>
            </MenuPopover>
        </>
    );
}
