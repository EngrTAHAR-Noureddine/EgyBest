import {Box} from "@mui/material";
import React from "react";

export const IMAGE = (prop) => (
    <Box
            borderRadius={5}
            component="img"
            height={"inherit"}
            width={"inherit"}
            position={'absolute'}
            zIndex={0}
            alt="img"
            src={prop.url}/>);