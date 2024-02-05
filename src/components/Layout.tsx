import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="flex flex-col w-screen h-full overflow-auto px-14 py-8">
      <Navbar />
      <div className="flex flex-col grow">{children}</div>
    </div>
  );
};

export default Layout;
