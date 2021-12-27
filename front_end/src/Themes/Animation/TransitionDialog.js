import * as React from "react";
import {Slide} from "@mui/material";

export const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});