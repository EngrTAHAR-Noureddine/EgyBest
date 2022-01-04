import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import {ButtonLG_WATCH} from "../Themes/Elements/Buttons";
import {WATCH_BUTTON} from "../Themes/Elements/IconButton";
import {makeStyles} from "@mui/styles";
import {blue_0A, blue_36, grey_36, white_100, white_80, white_EC} from "../Themes/Styles/Color";
import {Button, DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles(() => ({
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: grey_36
        }
    }
}));

export function FormDialog(prop) {
    const classes = useStyles();

    return (

            <Dialog open={prop.open} onClose={prop.handleClose} className={classes.menu} >
                <DialogTitle sx={{color:white_100}}>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{color:white_80}}>
                        Please enter an email address here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        sx={{color:white_100}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={prop.handleClose} sx={{color:white_EC}}>Cancel</Button>
                    <Button onClick={prop.handleClose} sx={{color:blue_0A}}>Add</Button>
                </DialogActions>
            </Dialog>

    );
}


function DialogWatch(props) {
    const { onClose, selectedValue, open } = props;
    const classes = useStyles();
    const [openIT, setOpenIT] = React.useState(false);

    const handleClickOpenIT = () => {
        setOpenIT(true);
    };

    const handleCloseIT = () => {
        setOpenIT(false);
    };


    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} className={classes.menu}>
            <DialogTitle sx={{color:white_100}}>Set account</DialogTitle>
            <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: blue[100], color: blue[600] }}>
                                <PersonIcon sx={{color:white_100}}/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} sx={{color:white_80}} />
                    </ListItem>
                ))}

                <ListItem autoFocus button onClick={handleClickOpenIT}>
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" sx={{color:blue_36}}/>
                </ListItem>
                <FormDialog handleClickOpen={handleClickOpenIT} open={openIT} handleClose={handleCloseIT}/>
            </List>
        </Dialog>
    );
}

DialogWatch.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function DialogWatchTogether(prop) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return(
        <div>

            {(prop.matches)?<ButtonLG_WATCH handleClickOpen={handleClickOpen}  watch_together={prop.watch_together}/>
                :<WATCH_BUTTON handleClickOpen={handleClickOpen}/>}
            <DialogWatch
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}

