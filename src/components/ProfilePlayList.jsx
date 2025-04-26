import { UserIcon } from "@heroicons/react/24/outline";
import smallVideos from "../data/smallvideodata.json";

export default function ProfilePlayList() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <p className="text-customwhite-100 font-semibold mb-2 text-xl md:text-2xl">
          Playlists
        </p>
        <button className="text-customwhite-100 text-sm  mb-2 font-semibold">
          View all
        </button>
      </div>
      <div className="flex overflow-x-auto  gap-4">
        {smallVideos.map((video) => (
          <div key={video.id} className="min-w-[200px] w-[200px] flex-shrink-0">
            <iframe
              className="w-full aspect-video rounded-lg"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>

            <div className="flex items-start+ gap-2 mt-2">
              <div className="bg-customgray-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <UserIcon className="h-6 w-6 text-gray-500 " />
              </div>
              <div className="flex flex-col">
                <p className="text-customwhite-100 text-sm line-clamp-2 break-words">
                  {video.title}
                </p>
                <div className="flex flex-col">
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
