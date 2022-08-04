import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function TopBar( { title } ) {
    return (
        <BarWrapper>
                <TitleSection title={title}/>

                <IconSection />
        </BarWrapper>
    )
}

const TitleSection = ({title}) => {
    return (
        <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{flexGrow: 1}}
        >
            {title}
        </Typography>
    )
}

const BarWrapper = (props) => {
    return (
        <StyledAppBar position="absolute">
            <Toolbar>
                {props.children}
            </Toolbar>
        </StyledAppBar>
    )
}

const IconSection = () => {
    return (
        <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    )
}

const StyledAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100%)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
