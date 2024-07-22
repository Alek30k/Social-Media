// import prisma from "@/lib/client";
// import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
// import StoryList from "./StoryList";

const Stories = async () => {
  //   const { userId: currentUserId } = auth();

  //   if (!currentUserId) return null;

  //   const stories = await prisma.story.findMany({
  //     where: {
  //       expiresAt: {
  //         gt: new Date(),
  //       },
  //       OR: [
  //         {
  //           user: {
  //             followers: {
  //               some: {
  //                 followerId: currentUserId,
  //               },
  //             },
  //           },
  //         },
  //         {
  //           userId: currentUserId,
  //         },
  //       ],
  //     },
  //     include: {
  //       user: true,
  //     },
  //   });
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* <StoryList stories={stories} userId={currentUserId}/> */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/25003745/pexels-photo-25003745/free-photo-of-ciudad-amanecer-puesta-de-sol-agua.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ale</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
