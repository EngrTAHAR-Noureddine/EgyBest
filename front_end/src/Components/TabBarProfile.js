import {Box} from "@mui/material";
import * as React from 'react';
import {TabPanel} from "../Themes/Elements/TabPanel";
import {CustomTab} from "../Themes/Elements/CustomTab";

export function TabBarProfile(prop) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const list = [12,34,56,2];


    return (
        <Box flexGrow={1} px={2}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <CustomTab value={value} handleChange={handleChange} list={list}/>
            </Box>
            <TabPanel value={value} index={0} list={prop.list}/>
            <TabPanel value={value} index={1} list={prop.list}/>
            <TabPanel value={value} index={2} list={prop.list}/>
            <TabPanel value={value} index={3} list={prop.list}/>
        </Box>
    );

}