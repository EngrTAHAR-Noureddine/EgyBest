import {alpha, Box, Collapse, InputBase} from "@mui/material";
import {useState} from "react";
import {SEARCH_BUTTON} from "./IconButton";
import String from '../String/String';


export const SearchBar = function (prop){
    const [state, setState] = useState(false);
    const [customValue,setValue] = useState('');
    const string = new String(prop.isArabic);

    const onClicked = () => {
      setState(!state)
    }
    const onSearch = ()=>{
        prop.setResearch(customValue)
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
                    value={customValue}
                    onChange={(e)=>{
                        setValue(e.target.value);
                    }}
                    placeholder={string.SEARCH_PLACEHOLDER()}
                />
            </Box>
        </Collapse>
        <SEARCH_BUTTON go={state} onClicked ={(state)?onSearch:onClicked}/>
    </Box>
)};

