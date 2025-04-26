import {
  UserIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

export default function ProfileHeader() {
  return (
    <div className="p-4 flex gap-4">
      <div className="bg-customgray-100 rounded-full w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
        <UserIcon className="h-10 w-10 text-gray-500 md:h-18 md:w-18" />
      </div>
      <div className="flex flex-col">
        <p className="text-customwhite-100 text-xl font-bold md:text-4xl">MythinBlack</p>
        <p className="text-gray-400 text-sm md:text-lg">@MythinBlack</p>
        <div className="bg-customgray-100 flex items-center p-2 rounded-4xl mt-2 text-sm -ml-1 gap-1 md:w-[145px]">
          <ArrowPathRoundedSquareIcon class="h-5 w-5 text-customwhite-100" />
          <button className="text-customwhite-100 md:text-md"> Switch accounts</button>
        </div>
      </div>
    </div>
  );
}
