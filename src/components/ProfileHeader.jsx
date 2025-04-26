import {
  UserIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

export default function ProfileHeader() {
  return (
    <div className="p-4 flex gap-2">
      <div className="bg-customgray-100 rounded-full w-20 h-20 flex items-center justify-center">
        <UserIcon className="h-10 w-10 text-gray-500" />
      </div>
      <div className="flex flex-col">
        <p className="text-customwhite-100 text-xl font-bold">MythinBlack</p>
        <p className="text-gray-400 text-sm">@MythinBlack</p>
        <div className="bg-customgray-100 flex items-center p-2 rounded-4xl mt-2 text-sm -ml-1 gap-1">
          <ArrowPathRoundedSquareIcon class="h-5 w-5 text-customwhite-100" />
          <button className="text-customwhite-100"> Switch accounts</button>
        </div>
      </div>
    </div>
  );
}
