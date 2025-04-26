import {
  UserIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";
import Videos from "../data/videos.json";

export default function YourProfile() {
  return (
    <>
      <div className="bg-customblack-100 min-w-screen min-h-screen">
        {/*Profile banner/ header*/}
        <div className="p-4 flex gap-2">
          <div className="bg-customgray-100 rounded-full w-20 h-20 flex items-center justify-center">
            <UserIcon className="h-10 w-10 text-gray-500" />
          </div>
          <div className="flex flex-col">
            <p className="text-customwhite-100 text-xl font-bold">
              MythinBlack
            </p>
            <p className="text-gray-400 text-sm">@MythinBlack</p>
            <div className="bg-customgray-100 flex items-center p-2 rounded-4xl mt-2 text-sm -ml-1 gap-1">
              <ArrowPathRoundedSquareIcon class="h-5 w-5 text-customwhite-100" />
              <button className="text-customwhite-100"> Switch accounts</button>
            </div>
          </div>
        </div>

        {/*History section*/}
        <div className="p-4">
          <div className="flex justify-between">
            <p className="text-customwhite-100 font-semibold mb-2">History</p>
            <button className="text-customwhite-100 text-sm  mb-2 font-semibold">View all</button>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-4">
            {Videos.map((video) => (
              <div
                key={video.id}
                className="min-w-[300px] w-[300px] flex-shrink-0"
              >
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

        {/*Playlist Section*/}
        <div className="p-4">
          <div className="flex justify-between">
            <p className="text-customwhite-100 font-semibold mb-2">Playlists</p>
            <button className="text-customwhite-100 text-sm  mb-2 font-semibold">View all</button>
          </div>
          <div className="flex overflow-x-auto  gap-4">
            {Videos.map((video) => (
              <div
                key={video.id}
                className="min-w-[200px] w-[200px] flex-shrink-0"
              >
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

        {/*Watch Later section*/}
        <div className="p-4">
          <div className="flex justify-between">
            <div className="flex flex-col ">
            <p className="text-customwhite-100 font-semibold">Watch later</p>
            <p className="text-gray-500 text-sm">67 videos</p>
            </div>
            <button className="text-customwhite-100 text-sm  mb-2 font-semibold">View all</button>
          </div>
          <div className="flex overflow-x-auto  gap-4">
            {Videos.map((video) => (
              <div
                key={video.id}
                className="min-w-[300px] w-[300px] flex-shrink-0"
              >
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

        {/*Liked Videos section */}
        <div className="p-4">
          <div className="flex justify-between">
            <div className="flex flex-col ">
            <p className="text-customwhite-100 font-semibold">Liked Videos</p>
            <p className="text-gray-500 text-sm">67 videos</p>
            </div>
            <button className="text-customwhite-100 text-sm  mb-2 font-semibold">View all</button>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-4">
            {Videos.map((video) => (
              <div
                key={video.id}
                className="min-w-[300px] w-[300px] flex-shrink-0"
              >
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

      </div>
    </>
  );
}
