import {useScrollTrigger} from "@mui/material";
import * as React from "react";
import {black_30, black_80} from "../Styles/Color";

const ScrollHandler = props => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? window() : undefined
    });

    return React.cloneElement(props.children, {
        style: {
            backgroundColor: trigger ? black_80 : black_30,
        }
    });
};

export const ScrollToColor = props => {
    return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};