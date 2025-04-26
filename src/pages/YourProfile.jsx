import ProfileHeader from "../components/ProfileHeader";
import ProfileHistorySection from "../components/ProfileHistorySection";
import ProfilePlayList from "../components/ProfilePlayList";
import WatchLater from "../components/WatchLater";
import LikedVideos from "../components/LikedVideos";

export default function YourProfile() {
  return (
    <>
      <div className="bg-customblack-100 min-w-screen min-h-screen">
        {/*Profile banner/ header*/}
        <ProfileHeader />

        {/*History section*/}
        <ProfileHistorySection />

        {/*Playlist Section*/}
        <ProfilePlayList />

        {/*Watch Later section*/}
        <WatchLater />

        {/*Liked Videos section */}
        <LikedVideos />
      </div>
    </>
  );
}
