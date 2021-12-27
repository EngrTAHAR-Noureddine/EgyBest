import {alpha, Box, Collapse, InputBase} from "@mui/material";
import {useState} from "react";
import {SEARCH_BUTTON} from "./IconButton";


export const SearchBar = function (){
    const [state, setState] = useState(false);

    const onClicked = () => {
      setState(!state)
    }

    return (
    <Box display={'flex'}
         height={"100%"}
         width={'100%'}
         justifyContent={'right'}
         flexDirection={'row'} >

        <Collapse orientation={'horizontal'}  in={state}>
            <Box

                 bgcolor={alpha('#FFFFFF',0.05)}
                 height={'100%'}
                 width={"100%"}
                 sx={{borderBottomColor:'#363836'}}
                 borderBottom={1}
            >
                <InputBase
                    sx={{height:"100%",width:"100%", color:'white', backgroundColor:'transparent'}}
                    inputMode={"search"}
                    autoFocus={true}
                    placeholder="Search…"
                />
            </Box>
        </Collapse>
        <SEARCH_BUTTON onClicked = {onClicked}/>
    </Box>
)};

