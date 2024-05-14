import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

import Button from "./Button";
export default function Navbar() {
  return (
    <header className="navbar-shadow fixed left-0 top-0 z-10 inline-flex w-screen items-center justify-between bg-white px-[4.8rem] py-6">
      <ul className="inline-flex items-center">
        <li className="h-[50px] w-[50px]">
          <Link to={"/"}>
            <img
              src="https://cdn.worldvectorlogo.com/logos/starbucks.svg"
              alt=""
            />
          </Link>
        </li>
        <li className="pl-6">
          <Link to={"/"} className="list-element">
            Starbucks Rewards
          </Link>
        </li>
        <li className="pl-6 ">
          <Link className="list-element">Menü</Link>
        </li>
        <li className="pl-6 ">
          <Link className="list-element">Kampanyalar</Link>
        </li>
        <li className="pl-6 ">
          <Link className="list-element">E-Gift</Link>
        </li>
        <li className="pl-6 ">
          <Link className="list-element">KURUMSAL ÇÖZÜMLER</Link>
        </li>
      </ul>
      <ul className="inline-flex items-center">
        <li className="">
          <Link className="inline-flex items-center text-2xl font-extrabold">
            <span className="mr-2">
              <FaLocationDot className="h-8 w-8" />
            </span>
            Mağazalarımız
          </Link>
        </li>
        <li className="ml-4">
          <Button variant={"primary"}>Alışverişe Başla</Button>
        </li>
        <li className="navbar-btn !ml-[40px]">
          <Button variant="secondary-outlined">Giriş</Button>
        </li>
        <li className="navbar-btn">
          <Button variant="secondary">Hemen Katıl</Button>
        </li>
      </ul>
    </header>
  );
}
