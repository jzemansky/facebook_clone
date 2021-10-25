import React from "react"
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontOutlined from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircle from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Expand } from "@mui/icons-material";
import {useStateValue} from "./StateProvider";


function Header() {
    const [{user}, dispatch] = useStateValue();
    
    return (
        <div className="header">
            <div className="header_left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <div className="header_input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>

            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Header