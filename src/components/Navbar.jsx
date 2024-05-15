import { Link } from "react-router-dom";
import { FaLocationDot, FaBars } from "react-icons/fa6";

import Button from "./Button";
export default function Navbar() {
  return (
    <header className="lg:navbar-shadow relative left-0 top-0 z-10 items-center bg-white py-[1.6rem] lg:fixed lg:w-screen">
      <div className="px-[1.6rem] lg:px-[4.8rem]">
        <div className="!relative !flex !items-center">
          <div className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]">
            <Link to={"/"}>
              <img
                src="https://cdn.worldvectorlogo.com/logos/starbucks.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="grow items-center lg:flex">
            <ul className="hidden !shrink-0 items-center pl-5 pr-[2.6rem] lg:inline-flex">
              <li className="list-element !p-0">
                <Link to={"/"}>Starbucks Rewards</Link>
              </li>
              <li className="list-element">
                <Link>Menü</Link>
              </li>
              <li className="list-element">
                <Link>Kampanyalar</Link>
              </li>
              <li className="list-element">
                <Link>E-Gift</Link>
              </li>
              <li className="list-element">
                <Link>KURUMSAL ÇÖZÜMLER</Link>
              </li>
            </ul>
            <div className="ml-auto hidden !shrink-0 lg:flex">
              <ul className="ml-[2.4rem] inline-flex items-center">
                <li className="">
                  <Link className="inline-flex items-center text-2xl font-extrabold">
                    <span className="mr-2">
                      <FaLocationDot className="h-8 w-8" />
                    </span>
                    Mağazalarımız
                  </Link>
                </li>
                <li>
                  <Button variant="primary" className="ml-[1.6rem]">
                    Alışverişe Başla
                  </Button>
                </li>
                <li>
                  <Button
                    variant="secondary-outlined"
                    className="navbar-btn ml-16"
                  >
                    Giriş
                  </Button>
                </li>
                <li>
                  <Button variant="secondary" className="navbar-btn">
                    Hemen Katıl
                  </Button>
                </li>
              </ul>
            </div>
            <span className="absolute bottom-0 right-0 top-0 h-16 w-[4.4rem] lg:hidden">
              <span className="absolute top-1/2 -translate-y-1/2">
                <button className="pointer relative min-h-11 min-w-11 bg-transparent p-0">
                  <FaBars className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden align-middle" />
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
