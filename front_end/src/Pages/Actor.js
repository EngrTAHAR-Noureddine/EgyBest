import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import Result_List from "../Components/Result_List";
import {BoxPersonPhoto} from "../Components/BoxPersonPhoto";
import actorPhoto from '../Asset/Actor.jpg';
import {TYPOGRAPHY_GIG_TITLE_UNDERLINED} from "../Themes/Styles/Typographies";

export default function Actor() {
    const list = [1,2,3,4,5,6];
    return(
        <Box>
            <Seperator_Bar/>
            <BoxPersonPhoto name={'James Spader'} photo={actorPhoto}/>
            <TYPOGRAPHY_GIG_TITLE_UNDERLINED what={'Works'} number={30}/>
            <Result_List list={list}/>
        </Box>
    )

}