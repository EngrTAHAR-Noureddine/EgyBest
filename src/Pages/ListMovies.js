import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import Result_List from "../Components/Result_List";
import Menu_Board from "../Components/Menu_Board";
import {useState} from "react";


function ListMovies(prop) {

    const [listFiltred,setlistFiltred] = useState([]);
    const onFilter = (filter)=>{
        console.log(filter.Language,filter.Year);
        const l = prop.list;
        const list = l.filter((item)=>((item.language===filter.Language)||(item.year===filter.Year)));
        console.log('list: ', list);
        setlistFiltred(list);
    }

    return(
        <Box sx={{height:'auto',flexGrow: 1, padding:0,margin:0}}>
            <Seperator_Bar/>
            <Menu_Board onFilter={onFilter} isArabic={prop.isArabic}/>
            <Result_List selectorClicker={prop.selectorClicker} list={(listFiltred.length===0)?prop.list:listFiltred}/>
        </Box>
    )
}
export default ListMovies;

