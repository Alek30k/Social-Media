import Image from "next/image";
import Link from "next/link";

const UserInfoCard = async ({ userId }: { userId: string }) => {
  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        actualizar usuario ) : (
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">ale</span>
          <span className="text-sm">@user.username</span>
        </div>
        description && <p>description</p>
        city &&
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>user.city</b>
          </span>
        </div>
        user.school &&
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>user.school</b>
          </span>
        </div>
        user.work &&
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>user.work</b>
          </span>
          <div className="flex items-center justify-between">
            user.website &&
            <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="" width={16} height={16} />
              <Link href="user.website" className="text-blue-500 font-medium">
                user.website
              </Link>
            </div>
            <div className="flex gap-1 items-center">
              <Image src="/date.png" alt="" width={16} height={16} />
              <span>Joined </span>
            </div>
          </div>
          UserInfoCardInteraction
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
