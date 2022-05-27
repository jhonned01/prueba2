import React from "react";
import Link from "next/link";
const ItemMenu = ({ children, ruta }) => {
  return (
    <li className=" mx-3 my-6 md:mx-1 lg:mx-3  hover:scale-125">
      <Link href={`${ruta}`}>
        <a className="text-xl md:text-base lg:text-xl hover:text-cyan-600  duration-500">
          {children}
        </a>
      </Link>
    </li>
  );
};

export default ItemMenu;
