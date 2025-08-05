import { Outlet } from "react-router";
import ScrollIndicator from "../components/animated/ScrollIndicator";
import NavBar from "../components/ui/NavBar";
import useSmoothScroll from "../hooks/animated/useSmoothScroll";

const Layout = () => {
  useSmoothScroll({ autoInit: true });

  return (
    <>
      <div className="fixed top-0 z-[1600] w-full h-fit">
        <ScrollIndicator />
      </div>
      <header
        style={{ paddingTop: "env(safe-area-inset-top)" }}
        className="w-full bg-transparent  min-h-[72px] fixed top-0 left-0 z-[999] flex items-start justify-center"
      >
        <NavBar />
      </header>
      <main className="w-full h-auto">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
