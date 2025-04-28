import smallVideos from "../data/smallvideodata.json";

export default function PlayList() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-customblack-100">
        <div>
          <div className="p-2">
            <h1 className="text-customwhite-100 font-bold text-2xl md:text-4xl">
              Playlists
            </h1>
          </div>
          <div className="flex gap-2 p-2">
            <div className="bg-customgray-100 p-[6px] rounded-2xl">
              <button className="text-customwhite-100 text-sm font-semibold cursor-pointer">
                Recently added
              </button>
            </div>
            <div className="bg-customgray-100 p-[6px] rounded-2xl">
              <button className="text-customwhite-100 text-sm font-semibold cursor-pointer">
                Sort by A-Z
              </button>
            </div>
            <div className="bg-customgray-100 p-[6px] rounded-2xl">
              <button className="text-customwhite-100 text-sm font-semibold cursor-pointer">
                Playlists
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex md:overflow-x-auto md:no-scrollbar md:p-2 lg:flex lg:flex-row lg:gap-4">
          {smallVideos.map((video) => (
            <div
              key={video.id}
              className="flex flex-row items-start md:flex md:flex-col"
            >
              <div className="aspect-video h-[150px] w-[200px] md:w-[350px] md:h-[170px] lg:w-[500px] lg:h-[280px] ml-2 my-2 flex-shrink-0">
                <iframe
                  className="w-full rounded-lg lg:h-[300px] md:h-[180px]"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-2 flex flex-col ml-2 sm:justify-center sm:mt-3 md:w-[200px] lg:w-[500px]">
                <p className="text-customwhite-100 line-clamp-2 break-words lg:text-xl">
                  {video.title}
                </p>
                <p className="text-gray-500 text-sm lg:text-lg">
                  Programming with Mosh
                </p>
                <p className="text-gray-500 text-sm lg:text-lg">6.1M views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
