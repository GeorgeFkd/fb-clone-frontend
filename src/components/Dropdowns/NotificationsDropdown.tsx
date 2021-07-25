import { MoreHoriz } from "@material-ui/icons";
import NotificationRow from "./NotificationRow";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import styles from "./NotificationsDropdown.module.css";
import "./NotificationsDropdown.css"
interface Props {}

const NotificationsDropdown: React.FC<Props> = () => {
  //todo fix scroll issue
  return (
    <div
      className={`px-4 flex rounded-lg hover:overflow-y-scroll flex-col w-52   space-y-2 bg-primaryLight ${styles.container}`}
      style={{
        position: "absolute",
        top: "3.3rem",
        right: "1rem",
        width: "400px",
        maxHeight: "550px",
        overflowY: "hidden",
        
      }}
    >
      <div className="flex items-center mb-6">
        <h1 className="text-white font-semibold" style={{ fontSize: "2rem" }}>
          Notifications
        </h1>
        <MoreHoriz
          className="p-1 rounded-full hover:bg-hoverGray ml-auto"
          fontSize="large"
        />
      </div>
      <div className="flex">
        <p className="text-white font-semibold" style={{ fontSize: "1.25rem" }}>
          Earlier
        </p>
      </div>
      <div className="flex flex-col">
        {/* <NotificationRow
          from_imgSrc={session.user.image}
          isNotRead={true}
          from_name={session.user.name}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={PeopleOutlineIcon}
          reactionColor="skyblue"
        />
        <NotificationRow
          from_imgSrc={session.user.image}
          isNotRead={false}
          from_name={session.user.name}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={ChatBubbleIcon}
          reactionColor="limegreen"
        />
        <NotificationRow
          from_imgSrc={session.user.image}
          isNotRead={true}
          from_name={session.user.name}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={PeopleOutlineIcon}
          reactionColor="skyblue"
        />
        <NotificationRow
          from_imgSrc={session.user.image}
          isNotRead={false}
          from_name={session.user.name}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={ChatBubbleIcon}
          reactionColor="limegreen"
        />
        <NotificationRow
          from_imgSrc={session.user.image}
          isNotRead={true}
          from_name={session.user.name}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={PeopleOutlineIcon}
          reactionColor="skyblue"
        />
        <NotificationRow
          from_imgSrc={session.user.image}
          isNotRead={false}
          from_name={session.user.name}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={ChatBubbleIcon}
          reactionColor="limegreen"
        />
        <NotificationRow
          from_imgSrc={session.user.image}
          isNotRead={false}
          from_name={session.user.name}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={ChatBubbleIcon}
          reactionColor="limegreen"
        />
        <NotificationRow
          from_imgSrc={session.user.image}
          isNotRead={false}
          from_name={session.user.name}
          content="mentioned you in a comment in"
          group="Programmer NullPosting"
          ReactionIcon={ChatBubbleIcon}
          reactionColor="limegreen"
        /> */}
       </div> 
    </div>
  );
};

export default NotificationsDropdown;
