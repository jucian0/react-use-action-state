import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <main className="container mx-auto py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
