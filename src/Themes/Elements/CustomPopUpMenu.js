import {Box, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useState} from "react";
import {POPUP_MENU_BUTTON} from "./Buttons";
import { FixedSizeList } from 'react-window';
import { black_80, white_100} from "../Styles/Color";



export function CustomPopUpMenu(prop) {
    const [open, setOpenPopUpMenu] = useState(false);

    const Toggle = ()=>{
        setOpenPopUpMenu(!open)
    }
    const Closing = () => {
        setOpenPopUpMenu(false)
    }
    const Choose = (index) => {
        prop.setSelect({...prop.selector,[prop.type]:prop.list[index]});
        setOpenPopUpMenu(false)
    }

    function renderRow(props) {
        const {index, style } = props;

        return (
            <ListItem style={style} onClick={()=>Choose(index)}
                      sx={{backgroundColor:black_80,color:white_100}}
                      key={index} component="div" disablePadding>
                <ListItemButton >
                    <ListItemText primary={prop.list[index]} />
                </ListItemButton>
            </ListItem>
        );
    }
    return(
        <Box>
            <POPUP_MENU_BUTTON state={open}  toggle={Toggle} item={prop.selected}/>

            <Box display={(open)?'flex':'none'}
                 zIndex={(open)?10:0} position={(open)?'absolute':'static'}
                 height={'auto'} width={'inherit'} onMouseLeave={Closing}>
                <FixedSizeList
                    height={300}
                    width={200}
                    itemSize={50}
                    itemCount={prop.list.length}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        </Box>
    )
}