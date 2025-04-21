import { HomeIcon, VideoCameraIcon  } from "@heroicons/react/24/outline";

export default function SideBar() {
  return (
    <div className="md:min-h-screen md:bg-customblack-100 md:w-[350px]">
      <div className="">
        <div className="flex items-center gap-11 p-4 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[60px]">
          <HomeIcon class="h-6 w-6 text-customwhite-100" />
          <p className="font-semibold text-lg text-customwhite-100">Home</p>
        </div>

        <div className="flex items-center gap-11 p-4 hover:bg-customgray-100 hover:rounded-md cursor-pointer h-[60px]">
        <VideoCameraIcon class="h-6 w-6 text-customwhite-100" />
        <p className="font-semibold text-lg text-customwhite-100">Videos</p>
        </div>
      </div>
    </div>
  );
}
