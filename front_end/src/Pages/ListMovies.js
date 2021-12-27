import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import Result_List from "../Components/Result_List";
import Menu_Board from "../Components/Menu_Board";

function ListMovies() {
    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    return(
        <Box sx={{height:'auto',flexGrow: 1, padding:0,margin:0}}>
            <Seperator_Bar/>
            <Menu_Board/>
            <Result_List list={list}/>
        </Box>
    )
}
export default ListMovies;

