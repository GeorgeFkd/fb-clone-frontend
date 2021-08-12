import { MoreHoriz } from "@material-ui/icons";
import NotificationRow from "./NotificationRow";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import "./NotificationsDropdown.css";
import { IconContext } from "react-icons/lib";
import { IoIosMore } from "react-icons/io";
interface Props {}

const NotificationsDropdown: React.FC<Props> = () => {
  //todo fix scroll issue
  return (
    <div className="notifications-dropdown" data-testid="NotificationsDropdown">
      <div className="notifications-dropdown-title-container">
        <h1
          className="notifications-dropdown-title"
          style={{ fontSize: "2rem" }}
        >
          Notifications
        </h1>
        <IconContext.Provider
          value={{ className: "notifications-dropdown-title-moreoptions" }}
        >
          <IoIosMore />
        </IconContext.Provider>
      </div>
      <div className="notifications-dropdown-subtitle-container">
        <p className="notifications-dropdown-subtitle">Earlier</p>
      </div>
      <div className="notifications-main-content">
        <NotificationRow
          from_imgSrc={
            "https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
          }
          isNotRead={true}
          from_name={"Geon Fkd"}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={PeopleOutlineIcon}
          reactionColor="skyblue"
        />
        <NotificationRow
          from_imgSrc={
            "https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
          }
          isNotRead={true}
          from_name={"Geon Fkd"}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={PeopleOutlineIcon}
          reactionColor="skyblue"
        />
        <NotificationRow
          from_imgSrc={
            "https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
          }
          isNotRead={true}
          from_name={"Geon Fkd"}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={PeopleOutlineIcon}
          reactionColor="skyblue"
        />
      </div>
    </div>
  );
};

export default NotificationsDropdown;
