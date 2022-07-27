import Image from "next/image";
import React from "react";
import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <div className="bg-gray-700 text-gray-300 flex flex-col sm:flex-row justify-between items-center p-6 select-none">
      <div
        className="flex
      "
      >
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
        width={100}
        height={60}
        alt="logo"
        className="cursor-pointer active:brightness-110"
      />
    </div>
  );
}

export default Header;
