import {
  HomeIcon,
  VideoCameraIcon,
  RssIcon,
  ChevronRightIcon,
  ClockIcon,
  ListBulletIcon,
  BookmarkIcon,
  HandThumbUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function SideBar({ className = "" }) {
  return (
    <div
      className={`md:min-h-screen md:bg-customblack-100 md:w-[350px] ${className}`}
    >
      {/*SideBar header content*/}
      <div className="border-b-2 border-b-customgray-100 ml-2 mr-2">
        <div className="flex items-center gap-11 p-2 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[50px]">
          <HomeIcon class="h-6 w-6 text-customwhite-100" />
          <p className="font-semibold text-md text-customwhite-100">Home</p>
        </div>

        <div className="flex items-center gap-11 p-2 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[60px]">
          <VideoCameraIcon class="h-6 w-6 text-customwhite-100" />
          <p className="font-semibold text-md text-customwhite-100">Videos</p>
        </div>

        <div className="flex items-center gap-11 p-2 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[60px] mb-4">
          <RssIcon class="h-6 w-6 text-customwhite-100" />
          <p className="font-semibold text-md text-customwhite-100">
            Subscriptions
          </p>
        </div>
      </div>

      {/*SideBar middle content*/}
      <div className="border-b-2 border-b-customgray-100 ml-2 mr-2 mt-4">
        <div className="flex items-center gap-2 p-2 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[50px]">
          <p className="text-customwhite-100 font-semibold text-lg">You</p>
          <ChevronRightIcon class="h-6 w-6 text-gray-500" />
        </div>

        <div className="flex items-center gap-11 p-2 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[60px]">
          <div className="relative w-6 h-6">
            <ClockIcon className="absolute left-0 top-0 w-6 h-6 text-customwhite-100" />
          </div>
          <p className="font-semibold text-md text-customwhite-100">History</p>
        </div>

        <div className="flex items-center gap-11 p-2 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[60px]">
          <div className="relative w-6 h-6">
            <ListBulletIcon className="absolute left-0 top-0 w-6 h-6 text-customwhite-100" />
          </div>
          <p className="font-semibold text-md text-customwhite-100">
            Playlists
          </p>
        </div>

        <div className="flex items-center gap-11 p-2 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[60px]">
          <BookmarkIcon class="h-6 w-6 text-customwhite-100" />
          <p className="font-semibold text-md text-customwhite-100">
            Watch Later
          </p>
        </div>

        <div className="flex items-center gap-11 p-2 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[60px]">
          <HandThumbUpIcon class="h-6 w-6 text-customwhite-100" />
          <p className="font-semibold text-md text-customwhite-100">
            Liked Videos
          </p>
        </div>

        <div className="flex items-center gap-11 p-2 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[60px] mb-4">
          <ArrowDownIcon class="h-6 w-6 text-customwhite-100" />
          <p className="font-semibold text-md text-customwhite-100">
            Downloads
          </p>
        </div>
      </div>

      {/*SideBar Subscription content*/}
      <div className=" ml-2 mr-2 mt-4">
        <div className="flex items-center gap-2 p-2 h-[50px]">
          <p className="text-customwhite-100 font-semibold text-lg">
            Subscriptions
          </p>
        </div>
      </div>
    </div>
  );
}
