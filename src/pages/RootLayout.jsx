import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
