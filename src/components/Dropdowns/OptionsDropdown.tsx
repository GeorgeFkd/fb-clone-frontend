import { Avatar } from "@material-ui/core";
import FeedbackIcon from "@material-ui/icons/Feedback";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Option from "./Option";

interface Props{
    
}

const  OptionsDropdown:React.FC<Props> = ({}) => {
    return (
        <div
            className="flex flex-col space-y-2  border-2 border-gray-200 px-4 py-2 bg-primaryLight"
            style={{
                position: "absolute",
                top: "3.3rem",
                right: "1rem",
                width: "375px",
               
            }}
        >
            <div className="flex space-x-4 rounded-md bg-transparent hover:bg-hoverGray items-center cursor-pointer">
                <Avatar
                    // src={session.user.image}
                    style={{ width: "3.5rem", height: "3.5rem" }}
                />
                <div className="flex flex-col space-y-1">
                    <p className={` text-white font-semibold `}>
                        {/* {session.user.name} */}
                    </p>
                    <p className="text-gray-500 font-semibold">
                        See your profile
                    </p>
                </div>
                {/* find a way to get it to the end of the flex container */}
            </div>
            <hr />
            <div className="flex space-x-4 rounded-md bg-transparent  hover:bg-hoverGray items-center cursor-pointer">
                <FeedbackIcon
                    className=" text-gray-500 rounded-full cursor-pointer p-1 bg-gray-700"
                    fontSize="large"
                />
                <div className="flex flex-col space-y-1">
                    <p className={` text-white font-semibold `}>
                        Give FeedBack
                    </p>
                    <p className="text-gray-500 font-semibold">
                        Help us improve the new facebook
                    </p>
                </div>

                {/* find a way to get it to the end of the flex container */}
            </div>
            <hr />
            <Option Icon={SettingsIcon} prompt="Setting and Privacy" />
            <Option Icon={HelpIcon} prompt="Help and Support" />

            <Option Icon={ExitToAppIcon} prompt="Log Out" />
        </div>
    );
}

export default OptionsDropdown;
