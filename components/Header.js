import React, { useState } from "react";
import Image from "next/image";
import ItemMenu from "./ItemMenu";
import { MenuIcon } from "@heroicons/react/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky p-5 shadow-xl md:flex md:items-center md:justify-between bg-gradient-to-b from-[#14188b] to-blue-500">
      <div className="flex justify-between items-center ">
        <span className="">
          <Image
            className="object-contain"
            src="/logo_sygescol.png"
            width={175}
            height={100}
            alt="Logo"
          />
        </span>
        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <button onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="h-10 w-10" />
          </button>
        </span>
      </div>
      <div>
        <ul
          className={`flex flex-col h-screen md:h-auto  md:flex md:flex-row  md:items-center z-[-1] md:z-auto md:static absolute text-white bg-black md:bg-transparent w-full left-0 md:w-auto md:py-0 py-5 md:pl-0 pl-7 md:opacity-100 opacity-0 right-[-400px] transition-all ease-in duration-500 ${
            isOpen && `right-0 py-11 opacity-100`
          }`}
        >
          <ItemMenu ruta="/">INICIO</ItemMenu>
          <ItemMenu ruta="nosotros">NOSOTROS</ItemMenu>
          <ItemMenu ruta="servicios">SERVICIOS</ItemMenu>
          <ItemMenu ruta="nuestrosClientes">CLIENTES</ItemMenu>
          <ItemMenu ruta="modulos">MÓDULOS</ItemMenu>
          <ItemMenu ruta="soporte">SOPORTE</ItemMenu>
          <ItemMenu ruta="contacto">CONTACTO</ItemMenu>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
