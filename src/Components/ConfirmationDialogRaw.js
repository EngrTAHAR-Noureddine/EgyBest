import * as React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, RadioGroup} from "@mui/material";
import {black_60, white_100} from "../Themes/Styles/Color";
import Radio from "@mui/material/Radio";
import PropTypes from "prop-types";

export function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, list,title,...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(title,value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435, backgroundColor:black_60, color:white_100 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                >
                    {list.map((option) => (
                        <FormControlLabel
                            value={option}
                            key={option}
                            control={<Radio sx={{color:white_100}}/>}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};


