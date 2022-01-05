import {Box} from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import Result_List from "../../Components/Result_List";
import LATEST_VUES_List from "../../Components/LATEST_VUES_List";

export function TabPanel(props) {
    const { value, index,list} = props;
    return (
        <div
            hidden={value !== index}
            id={`${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {(value===0)?<LATEST_VUES_List list={list}/>:<Result_List list={list}/>}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};