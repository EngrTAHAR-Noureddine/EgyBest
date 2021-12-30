import {Box, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import {TYPOGRAPHY_STYLE_EMAIL_PASSWORD} from "../Styles/Typographies";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import * as React from "react";
import {white_100} from "../Styles/Color";


export  function InputField(prop) {
    return(
        <Box flexGrow={1} px={{xs:1,sm:2,md:5}}>
            <TYPOGRAPHY_STYLE_EMAIL_PASSWORD direction={prop.direction} title={prop.title}/>
            <OutlinedInput
                fullWidth={true}
                disabled={prop.disabled}
                id="outlined-adornment-password"
                type={prop.type}
                placeholder={prop.placeholder}
                sx={{ borderRadius: 1000,border:1, borderColor:white_100 , color:white_100}}
            />
        </Box>
    )

}



export function PasswordField(prop) {
    const [values, setValues] = React.useState({
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return(
        <Box flexGrow={1} px={{xs:1,sm:2,md:5}}>
            <TYPOGRAPHY_STYLE_EMAIL_PASSWORD direction={prop.direction} title={prop.title}/>
            <OutlinedInput
                fullWidth={true}
                disabled={prop.disabled}
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                onChange={handleChange("password")}
                placeholder={prop.placeholder}
                sx={{ borderRadius: 1000,border:1, borderColor: white_100, color: white_100}}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            sx={{color:white_100}}
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
             />
        </Box>
    )

}
