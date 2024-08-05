import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";

const RightMenu = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {" "}
      <FriendRequests />
      <Birthdays />
    </div>
  );
};

export default RightMenu;
