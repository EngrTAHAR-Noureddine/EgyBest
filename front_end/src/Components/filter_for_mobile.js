import {FILTER_BUTTON} from "../Themes/Elements/Buttons";
import * as React from 'react';
import {Box} from "@mui/material";
import {flex_styles} from "../Themes/Styles/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {CustomDialogOfFilter} from "./CustomDialogOfFilter";

export function FilterButton (prop){
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const onClear = ()=>{
        prop.setSelect({
            Language:'Language',
            Status:'Status',
            Quality:'Quality',
            Year:'Year',
            Country:'Country',
            Category:'Category',
            Type:'Type',
            Translate:'Translate'
        })
    }

    return(
        <Box width={'inherit'} height={'inherit'} style={flex_styles.col_center}>
            <FILTER_BUTTON onClicked={()=>(matches)?()=>prop.onFilter(prop.selector):handleClickOpen()}/>
            <CustomDialogOfFilter onClear={onClear} setSelect={prop.setSelect}
                                  open={open} handleClose={handleClose}
                                  onFilter={prop.onFilter}
                                  selector={prop.selector}
                                  FilterList={prop.FilterList}/>
        </Box>
    )
}