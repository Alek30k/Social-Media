import Image from "next/image";

const FriendRequestList = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">ale</span>
        </div>
        <div className="flex gap-3 justify-end">
          <form>
            <button>
              <Image
                src="/accept.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
          <form>
            <button>
              <Image
                src="/reject.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">ale</span>
        </div>
        <div className="flex gap-3 justify-end">
          <form>
            <button>
              <Image
                src="/accept.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
          <form>
            <button>
              <Image
                src="/reject.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">ale</span>
        </div>
        <div className="flex gap-3 justify-end">
          <form>
            <button>
              <Image
                src="/accept.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
          <form>
            <button>
              <Image
                src="/reject.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestList;
