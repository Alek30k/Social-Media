import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/noAvatar.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {/* {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username} */}
            Ale Cabrera
          </span>
        </div>
        <Image src={"/more.png"} width={16} height={16} alt="" />
        {/* {userId === post.user.id && <PostInfo postId={post.id} />} */}
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        {/* {post.img && ( */}
        <div className="w-full min-h-96 relative">
          <Image
            src={"/noAvatar.png"}
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        {/* )} */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          incidunt corrupti, aliquam illo magni mollitia cum distinctio ratione
          dignissimos, saepe molestias consectetur unde. Consectetur, laborum.
          Sed atque et similique dicta.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <form>
              <button>
                <Image
                  src="/liked.png"
                  width={16}
                  height={16}
                  alt=""
                  className="cursor-pointer"
                />
              </button>
            </form>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              5<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              3 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
