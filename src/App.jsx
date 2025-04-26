import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideosList from "./pages/VideosList";
import RootLayout from "./pages/RootLayout";
import Videos from "./pages/Videos";
import YourProfile from "./pages/YourProfile";
import Subscriptions from "./pages/Subscriptions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <VideosList /> },
      { path: "videos", element: <Videos /> },
      { path: "yourprofile", element: <YourProfile /> },
      { path: "subscriptions", element: <Subscriptions /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
