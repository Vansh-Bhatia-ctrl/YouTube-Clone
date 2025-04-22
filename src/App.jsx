import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideosList from "./pages/VideosList";
import RootLayout from "./pages/RootLayout";
import Videos from "./pages/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <VideosList /> },
      { path: "videos", element: <Videos /> },
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
