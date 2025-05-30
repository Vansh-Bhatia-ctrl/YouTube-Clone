import VideosData from "../data/smallvideodata.json";
import Videos from "../data/videos.json";

export default function History() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-customblack-100 md:flex md:flex-col md:items-center md:justify-center">
        {/* Watch history header */}
        <div className="p-2 flex flex-col gap-4">
          <p className="text-customwhite-100 font-bold text-xl md:text-4xl">
            Watch history
          </p>
          <p className="text-red-400 font-semibold text-md md:text-xl">Today</p>
        </div>

        {/* Watch history videos */}
        <div>
          {VideosData.map((video) => (
            <div key={video.id} className="flex flex-row items-start md:items-start">
              <div className="aspect-video h-[150px] w-[200px] md:w-[250px] md:h-[200px] ml-2 my-2 flex-shrink-0">
                <iframe
                  className="w-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-customwhite-100 line-clamp-2 break-words">
                  {video.title}
                </p>
                <p className="text-gray-500 text-sm">Programming with Mosh</p>
                <p className="text-gray-500 text-sm">6.1M views</p>
              </div>
            </div>
          ))}
        </div>

        {/* Previously watched history header */}
        <div className="p-2 flex flex-col gap-4">
          <p className="text-red-400 font-semibold text-md md:text-xl">
            Previously watched videos
          </p>
        </div>

        {/* Previously watched history videos */}
        <div>
          {Videos.map((video) => (
            <div key={video.id} className="flex flex-row items-start md:items-start">
              <div className="aspect-video h-[150px] w-[200px] md:w-[250px] md:h-[200px] ml-2 my-2 flex-shrink-0">
                <iframe
                  className="w-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-customwhite-100 line-clamp-2 break-words">
                  {video.title}
                </p>
                <p className="text-gray-500 text-sm">Programming with Mosh</p>
                <p className="text-gray-500 text-sm">6.1M views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
