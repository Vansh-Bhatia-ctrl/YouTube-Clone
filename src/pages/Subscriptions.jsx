import Videos from "../data/videos.json";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Subscriptions() {
  return (
    <div className="flex md:w-screen lg:w-screen xl:w-screen overflow-x-hidden">
      <div className="min-h-screen w-screen bg-customblack-100 p-4">
        <div className="sm:p-2 md:p-4">
          <p className="text-customwhite-100 font-bold text-xl">Latest</p>
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-4 lg:grid lg:grid-cols-4 lg:overflow-x-hidden sm:grid sm:grid-cols-2 sm:gap-4">
          {Videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col mb-8 w-full max-w-md mx-auto hover:bg-customgray-100 md:p-2 rounded-md"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex items-start gap-2 mt-2">
                <div className="flex-shrink-0 rounded-full bg-customgray-100 p-2">
                  <UserIcon className="h-6 w-6 text-gray-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-customwhite-100 text-sm sm:text-base">
                    {video.title}
                  </p>
                  <div className="flex items-center gap-2 whitespace-nowrap md:flex-col md:items-start md:gap-0">
                    <p className="text-sm text-gray-400">22Luke</p>
                    <p className="text-sm text-gray-400">2.5k views</p>
                    <p className="text-sm text-gray-400">3 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
