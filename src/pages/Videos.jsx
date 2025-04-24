import {
  UserIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ShareIcon,
  ArrowDownIcon,
  BookmarkIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import VideosData from "../data/videos.json";

export default function Videos() {
  return (
    <div className="min-h-screen w-screen bg-customblack-100 flex justify-center items-start">
      <div className="w-full max-w-4xl aspect-video">
        {/*Video details*/}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VPvVD8t02U8"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="p-2 flex flex-col gap-2">
          <p className="text-customwhite-100 font-semibold">
            Flutter Mobile App Development Course
          </p>
          <div className="flex gap-2">
            <p className="text-gray-500 text-sm">4.1K views . </p>
            <p className="text-gray-500 text-sm">1 day ago</p>
            <button className="text-customwhite-100 text-sm font-semibold">
              ...more
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 rounded-full bg-customgray-100 p-2 w-[40px] ml-[5px] mt-2">
              <UserIcon className="h-6 w-6 text-gray-500" />
            </div>
            <div className="flex gap-4">
              <p className="text-customwhite-100 text-sm font-semibold">
                freeCodeCamp
              </p>
              <p className="text-gray-500 text-sm font-semibold">114k</p>
            </div>
          </div>
          <div className="mr-4">
            <button className="bg-gray-300 rounded-2xl p-2 font-semibold text-sm shadow-md h-[35px]">
              Subscribe
            </button>
          </div>
        </div>

        {/*Video options*/}
        <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar px-2">
          <div className="bg-customgray-100 w-[113px] flex p-[7px] ml-2 mt-4 rounded-2xl">
            <div className="flex gap-2 border-r-2 border-gray-600 items-center">
              <HandThumbUpIcon class="h-5 w-5 text-customwhite-100" />
              <p className="text-customwhite-100 text-sm mr-2">283</p>
            </div>
            <div className="ml-2">
              <HandThumbDownIcon class="h-5 w-5 text-customwhite-100" />
            </div>
          </div>

          <div className="bg-customgray-100 w-[80px] flex p-[5px] ml-2 mt-4 rounded-2xl">
            <div className="flex gap-2 items-center">
              <ShareIcon class="h-5 w-5 text-customwhite-100" />
              <p className="text-customwhite-100 text-sm mr-2">Share</p>
            </div>
          </div>

          <div className="bg-customgray-100 w-[110px] flex p-[5px] ml-2 mt-4 rounded-2xl">
            <div className="flex gap-2 items-center">
              <ArrowDownIcon class="h-5 w-5 text-customwhite-100" />
              <p className="text-customwhite-100 text-sm mr-2">Download</p>
            </div>
          </div>

          <div className="bg-customgray-100 w-[100px] flex p-[7px] ml-2 mt-4 rounded-2xl">
            <div className="flex gap-2 items-center">
              <FlagIcon class="h-5 w-5 text-customwhite-100" />
              <p className="text-customwhite-100 text-sm mr-2">Report</p>
            </div>
          </div>

          <div className=" flex p-[5px] ml-2 mt-4 rounded-2xl">
            <div className="flex gap-2 items-center">
              <BookmarkIcon class="h-5 w-5 text-customwhite-100" />
            </div>
          </div>
        </div>

        {/*Comment section*/}
        <div className="bg-customgray-100 w-auto mr-2 flex p-[10px] ml-2 mt-4 rounded-2xl flex-col">
          <div className="flex gap-2 items-center">
            <p className="text-customwhite-100 text-sm">Comments</p>
            <p className="text-gray-400 text-sm">354</p>
          </div>

          <div className="flex items-center mt-4 mb-2 gap-[4px]">
            <div className="flex-shrink-0 flex items-center justify-center">
              <UserIcon className="h-6 w-6 text-gray-500" />
            </div>
            <p className="text-customwhite-100 text-sm">
              This is a nice course.
            </p>
          </div>
        </div>

        {/*Recomeneded videos section */}
        {VideosData.map((video) => (
          <div key={video.id} className="mt-2 w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="gap-2 flex items-start justify-start">
              <div className="flex-shrink-0 rounded-full bg-customgray-100 p-2 w-[40px] ml-[5px] mt-4 flex items-start justify-start">
                <UserIcon className="h-6 w-6 text-gray-500" />
              </div>
              <div className="p-2 flex flex-col mb-2">
                <p className="text-customwhite-100 font-semibold">
                  {video.title}
                </p>
                <div className="flex gap-2">
                  <p className="text-gray-500 text-sm">freeCodeCamp .</p>
                  <p className="text-gray-500 text-sm">4.1K views . </p>
                  <p className="text-gray-500 text-sm">1 day ago</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
