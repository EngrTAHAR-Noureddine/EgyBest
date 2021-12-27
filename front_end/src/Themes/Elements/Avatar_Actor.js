import {Avatar, Box} from "@mui/material";
import {flex_styles} from "../Styles/styles";
import {useState} from "react";
import { grey_36} from "../Styles/Color";

import actor from "../../Asset/Actor.jpg";
import {TYPOGRAPHY_NAME_ACTOR, TYPOGRAPHY_PLAY_ACTOR} from "../Styles/Typographies";
export function AvatarActor(prop) {
    const [state, setState] = useState(false);
    const onMouseEnter = ()=>(
        setState(true)
    );
    const onMouseLeave = ()=>(
        setState(false)
    );
    return(

        <Box width={(state)? {xs:200,sm:300,lg:400}:{xs:50,lg:100}}
             height={{xs:50,lg:100}}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             borderRadius={1000} bgcolor={grey_36}
             sx={{display:'inline-flex', float:'left'}}
                m={1}
        >

            <Box height={'100%'} width={'100%'} style={flex_styles.row_center}>
            <Box display={(state)?'flex':'none'}
                 justifyContent={'center'}
                 flexDirection={'column'}
                 alignItems={'center'} px={1}
                 width={{xs:150,sm:250,lg:300}} height={{xs:50,lg:100}} borderRadius={1000}>

               <TYPOGRAPHY_NAME_ACTOR name={`James Spader ${prop.item}`} />
                <Box width={'90%'} height={5}/>
                <TYPOGRAPHY_PLAY_ACTOR name={'Raymound Redington'}/>
            </Box>

            <Avatar sx={{
                        width:{xs:50,lg:100}, height:{xs:50,lg:100}, boxShadow:(state)?0:10,
                        }} src={actor}/>
            </Box>
        </Box>

    )

}