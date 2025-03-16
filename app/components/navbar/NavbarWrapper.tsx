'use client';

// Wrapper for hiding navbar in certain routes
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  // Routes with hidden navbar
  const hiddenRoutes = ['/workouts']
  return !hiddenRoutes.includes(pathname) ? <Navbar /> : null;
}

export default NavbarWrapper