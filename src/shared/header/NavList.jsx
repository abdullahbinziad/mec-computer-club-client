import React, { useContext } from "react";
import "./header.css";
import {
 
  Typography,
 
  MenuItem,
 
} from "@material-tailwind/react";
import {
AcademicCapIcon,
IdentificationIcon,
UserGroupIcon,
UserPlusIcon,
QueueListIcon,
  TagIcon,
  BookOpenIcon,
  BookmarkIcon,
  HomeIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { UserContext } from "../../AuthProvider/AuthProvider";


const  NavList=()=> {

  const {user} = useContext(UserContext);


  const navListItems = [
    {
      label: "Home",
      icon: HomeIcon,
      path: "/",
    },
    {
      label: "Executives",
      icon: UserGroupIcon,
      path: "/executives",
    },
    {
      label: "Events",
      icon: AcademicCapIcon,
      path: "/events",
    },
    {
      label: "Memmeship",
      icon: UserPlusIcon,
      path: "/membership",
    },
   
   
    // {
    //   label: "Dashoard",
    //   icon: BookmarkIcon,
    //   path:"/dashoard"
    // },
  
  ];



  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, path }, key) => (
        <Typography
          key={label}
          variant="small"
          color="blue-gray"
          className="font-normal dark:text-white"
        >
          <MenuItem className="flex justify-between  gap-3 ">
            <Link className="flex items-center  gap-3" to={`${path}`}>
              {React.createElement(icon, { className: "h-[26px] w-[26px]" })}{" "}
              {label}
            </Link>
          </MenuItem>
        </Typography>
      ))}
       { user &&
        <Typography
        
        variant="small"
        color="blue-gray"
        className="font-normal dark:text-white"
      >
        <MenuItem className="flex justify-between  gap-3 ">
          <Link className="flex  gap-3" to='/dashboard'>
            {React.createElement(BookmarkIcon, { className: "h-[18px] w-[18px]" })}{" "}
           Dashboard
          </Link>
        </MenuItem>
      </Typography>
       }
    </ul>
  );
}

export default NavList;