import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { globalConfig } from "../config/global.config";

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("/");

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-nav">
          <div className="navbar-brand">
            <Link href="/">
              <a onClick={() => setActiveRoute("/")}>
                <Image src="/img/logo2.svg" alt="Logo" width={40} height={40} />
              </a>
            </Link>
          </div>
          {
            globalConfig.navbar.items.map((item, index) => (
              <Link
                href={item.link}

                key={item.link}
              >
                <a className={`navbar-item ${activeRoute === item.link ? "active" : ""}`}
                  onClick={() => setActiveRoute(item.link)}>
                  {item.label}
                </a>
              </Link>
            ))
          }
        </div>
        <div>
          <Link href="/login">
            <a className="navbar-item">Login</a>
          </Link>
          <Link href="/login">
            <a className="navbar-item btn btn-secondary">Sign In</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
