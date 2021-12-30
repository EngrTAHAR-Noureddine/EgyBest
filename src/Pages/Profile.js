import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import {BoxPersonPhoto} from "../Components/BoxPersonPhoto";
import {TabBarProfile} from "../Components/TabBarProfile";
import actorPhoto from '../Asset/Actor.jpg';
import String from '../Themes/String/String';

export default function Profile(prop) {
    const string = new String(prop.isArabic);

    return(
        <Box>
            <Seperator_Bar/>
            <BoxPersonPhoto name={'User user'} photo={actorPhoto}/>
            <TabBarProfile string={string} listMovies={prop.listMovies}
                           listSeries={prop.listSeries} listWWE={prop.listWWE}
                           listTheaters={prop.listTheaters}/>

        </Box>
    )

}