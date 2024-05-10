import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

import Button from "./Button";
export default function Navbar() {
  return (
    <header className="navbar-shadow fixed left-0 top-0 inline-flex w-screen items-center justify-between px-[4.8rem] py-7">
      <ul className="inline-flex items-center">
        <li className="h-[50px] w-[50px]">
          <Link to={"/"}>
            <img
              src="https://cdn.worldvectorlogo.com/logos/starbucks.svg"
              alt=""
            />
          </Link>
        </li>
        <li className="list-element">Starbucks Rewards</li>
        <li className="list-element">Menü</li>
        <li className="list-element">Kampanyalar</li>
        <li className="list-element">E-Gift</li>
        <li className="list-element">Kurumsal Satış</li>
      </ul>
      <ul className="inline-flex items-center">
        <li className="">
          <a href="" className="inline-flex items-center font-extrabold">
            <span className="mr-2">
              <FaLocationDot />
            </span>
            Mağazalarımız
          </a>
        </li>
        <li className="">
          <Button className="btn-primary navbar-btn">Alışverişe Başla</Button>
        </li>
        <li className="ml-10">
          <Button className="btn-secondary-outlined navbar-btn">Giriş</Button>
        </li>
        <li>
          <Button className="btn-secondary navbar-btn">Hemen Katıl</Button>
        </li>
      </ul>
    </header>
  );
}
