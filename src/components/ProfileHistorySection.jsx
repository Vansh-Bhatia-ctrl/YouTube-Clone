import { UserIcon } from "@heroicons/react/24/outline";
import Videos from "../data/videos.json";

export default function ProfileHistorySection() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <p className="text-customwhite-100 font-semibold mb-2">History</p>
        <button className="text-customwhite-100 text-sm  mb-2 font-semibold">
          View all
        </button>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-4">
        {Videos.map((video) => (
          <div key={video.id} className="min-w-[300px] w-[300px] flex-shrink-0">
            <iframe
              className="w-full aspect-video rounded-lg"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>

            <div className="flex items-center gap-2 mt-2">
              <div className="bg-customgray-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <UserIcon className="h-6 w-6 text-gray-500 " />
              </div>
              <div className="flex flex-col">
                <p className="text-customwhite-100 text-sm line-clamp-2 break-words">
                  {video.title}
                </p>
                <div className="flex gap-2">
                  <p className="text-gray-500 text-sm">freeCodeCamp</p>
                  <p className="text-gray-500 text-sm">6.1M views</p>
                  <p className="text-gray-500 text-sm">7 years ago</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
