import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface IProps {
    darkMode: boolean
    changeStyle: () => void;
}

export default function Header({changeStyle, darkMode}: IProps) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={changeStyle} />
            </Toolbar>

        </AppBar>
    )
}