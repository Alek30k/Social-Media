// import { auth } from "@clerk/nextjs/server";
// import Post from "./Post";
// import prisma from "@/lib/client";

const Feed = async () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {/* {posts.length ? (posts.map(post=>(
        <Post key={post.id} post={post}/>
      ))) : "No posts found!"} */}
    </div>
  );
};

export default Feed;
