import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Youtubenew_generated from "./Youtubenew_generated.jpg";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import Button from "@mui/material/Button";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Custom_topNavBar from "./custom_topNavBar";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ search, setSearch, API, setAPI }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOpenClose = () => {
    console.log(open);
    if (open === true) {
      handleDrawerClose();
    } else {
      console.log("close");
      handleDrawerOpen();
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <DrawerHeader edge="start" sx={{ ...(open && { display: "none" }) }}>
            <div className="twoIcons">
              <IconButton className={"menuicon"} onClick={handleOpenClose}>
                <MenuIcon />
                {/* {theme.direction === "left" ? <MenuIcon /> : <MenuIcon />} */}
              </IconButton>
              <Button className="yticon">
                {/* <YouTubeIcon fontSize="large" style={{ color: "red" }} />
        YouTube */}
                <img src={Youtubenew_generated} className="yticon"></img>
              </Button>
            </div>
          </DrawerHeader>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={}
            // edge="start"
            sx={{
              marginRight: "30px",
              //   ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton> */}
          <Custom_topNavBar
            API={API}
            setAPI={setAPI}
            search={search}
            setSearch={setSearch}
          />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader edge="start">
          <div className="twoIcons">
            <IconButton className={"menuicon"} onClick={handleOpenClose}>
              <MenuIcon />
              {/* {theme.direction === "left" ? <MenuIcon /> : <MenuIcon />} */}
            </IconButton>
            <Button className="yticon">
              {/* <YouTubeIcon fontSize="large" style={{ color: "red" }} />
        YouTube */}
              <img src={Youtubenew_generated} className="yticon"></img>
            </Button>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <HomeIcon />
            </ListItemIcon>{" "}
            Home
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <ExploreIcon />
            </ListItemIcon>{" "}
            Explore
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <SubscriptionsIcon />
            </ListItemIcon>{" "}
            Subscriptions
          </ListItem>
        </List>
        <Divider />
        <List></List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
