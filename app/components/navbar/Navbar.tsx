'use client';
import styles from "./navbar.module.css";
import DesktopMenu from "./menus/DesktopMenu";
import MobileMenu from "./menus/MobileMenu";
import { useWindowSize } from "@/app/hooks/useWindowSize";

const Navbar = () => {
  
  const {width} = useWindowSize()
  return (
    <nav className={`${styles.container} fixed top-0 left-0 h-[75px] w-screen bg-custom-bg text-custom-text z-50`}>

      {/* Display MobileMenu while below 450px*/}
      {width < 450 ? <MobileMenu />: <DesktopMenu />}
    </nav>
  );
};

export default Navbar;
