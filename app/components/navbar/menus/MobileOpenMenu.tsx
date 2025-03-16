import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

const MobileOpenMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } inset-0 flex h-screen z-10 bg-custom-bg transition-colors `}
    >
      <div className="flex justify-center w-full">
        <ul className="flex flex-col justify-center items-center gap-6 text-lg *:font-semibold *:text-3xl *:hover:text-custom-accent">
          <li className="hover:cursor-pointer">
            <AiOutlineSearch size={40} />
          </li>
          <li>
            <Link
              href="/"
              onClick={() =>
                setTimeout(() => (isOpen ? setIsOpen(false) : ""), 350)
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/workouts"
              onClick={() =>
                setTimeout(() => (isOpen ? setIsOpen(false) : ""), 350)
              }
            >
              Workouts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileOpenMenu;
