import {Box} from "@mui/material";
import * as React from 'react';
import {TabPanel} from "../Themes/Elements/TabPanel";
import {CustomTab} from "../Themes/Elements/CustomTab";

export function TabBarProfile(prop) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const list = [10,5,4,3];


    return (
        <Box flexGrow={1} px={2}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <CustomTab string={prop.string} value={value} handleChange={handleChange} list={list}/>
            </Box>
            <TabPanel value={value} index={0} list={prop.listMovies}/>
            <TabPanel value={value} index={1} list={prop.listSeries}/>
            <TabPanel value={value} index={2} list={prop.listTheaters}/>
            <TabPanel value={value} index={3} list={prop.listWWE}/>
        </Box>
    );

}