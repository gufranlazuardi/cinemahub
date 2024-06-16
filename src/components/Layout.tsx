import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="flex flex-col w-screen h-full overflow-auto py-8 px-6 md:px-8 lg:px-8 xl:px-14">
      <Navbar />
      <div className="flex flex-col grow">{children}</div>
    </div>
  );
};

export default Layout;
