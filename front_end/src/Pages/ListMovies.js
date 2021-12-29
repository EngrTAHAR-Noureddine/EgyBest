import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import Result_List from "../Components/Result_List";
import Menu_Board from "../Components/Menu_Board";
import {useState} from "react";


function ListMovies(prop) {
    //const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    const [listFiltred,setlistFiltred] = useState(prop.list);
    const onFilter = (filter)=>{
        const list = listFiltred;


    }

    return(
        <Box sx={{height:'auto',flexGrow: 1, padding:0,margin:0}}>
            <Seperator_Bar/>
            <Menu_Board onFilter={onFilter} isArabic={prop.isArabic}/>
            <Result_List selectorClicker={prop.selectorClicker} list={prop.list}/>
        </Box>
    )
}
export default ListMovies;

