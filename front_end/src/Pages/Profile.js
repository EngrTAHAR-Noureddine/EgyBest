import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import {BoxPersonPhoto} from "../Components/BoxPersonPhoto";
import {TabBarProfile} from "../Components/TabBarProfile";
import actorPhoto from '../Asset/Actor.jpg';

export default function Profile() {
    const list = [1,2,3,4,5,6];
    return(
        <Box>
            <Seperator_Bar/>
            <BoxPersonPhoto name={'User user'} photo={actorPhoto}/>
            <TabBarProfile list={list}/>

        </Box>
    )

}