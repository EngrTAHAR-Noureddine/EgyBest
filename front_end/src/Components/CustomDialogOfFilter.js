//when screen is like mobile screen so the user when click in filter => sho dialog of list of items
import * as React from "react";
import {
    AppBar,
    Box,
    Button,
    Dialog,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {Transition} from "../Themes/Animation/TransitionDialog";
import {black_80, grey_36, white_100, white_7070} from "../Themes/Styles/Color";
import CloseIcon from "@mui/icons-material/Close";
import {ConfirmationDialogRaw} from "./ConfirmationDialogRaw";

export function CustomDialogOfFilter(prop){
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('None');
    const [list, setList] = React.useState([]);
    const [title, setTitle] = React.useState('None');

    const handleClickListItem = (type,itemList) => {
        setTitle(type);
        setValue(prop.selector[type]);
        const subList = [type,...itemList];
        setList(subList);
        setOpen(true);
    };

    const handleClose = (type,newValue) => {
        setOpen(false);
        if (newValue) {
            prop.setSelect({...prop.selector,[type]:newValue});
        }
    };



    return(
        <Dialog
            fullScreen
            open={prop.open}
            onClose={prop.handleClose}
            TransitionComponent={Transition}
            sx={{display:{xs:'block', md:'none'}}}
        >
            <AppBar sx={{ position: 'relative', backgroundColor:black_80}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={prop.handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Filter
                    </Typography>
                    <Button autoFocus color="inherit" onClick={prop.onClear}>
                        Clear
                    </Button>
                    <Button autoFocus color={'info'} onClick={()=>{prop.handleClose(); prop.onFilter(prop.selector);}}>
                        Filter
                    </Button>
                </Toolbar>
            </AppBar>
            <Box width={'100%'} height={'100%'} sx={{backgroundColor:grey_36}}>
                <List sx={{p:1,backgroundColor:grey_36}}>

                    {
                        prop.FilterList.map((item)=>(
                            <ListItem button divider onClick={()=>handleClickListItem(item.type,item.list)}>
                                <ListItemText>
                                    <Typography color={white_100}>{item.type}</Typography>
                                    <Typography color={white_7070}>{prop.selector[item.type]}</Typography>
                                </ListItemText>
                            </ListItem>

                        ))
                    }
                    <ConfirmationDialogRaw
                        id="ringtone-menu"
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        value={value}
                        list={list}
                        title={title}
                    />
                </List>
            </Box>

        </Dialog>
    )
}
