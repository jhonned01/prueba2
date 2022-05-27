import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-cyan-200 p-5 bg-white shadow">
      <div>
        <span className="">
          <Image
            className="object-contain"
            src="/LOGO.icon"
            width={200}
            height={100}
            alt="Logo"
          />
        </span>
      </div>
    </nav>
  );
};

export default Header;
