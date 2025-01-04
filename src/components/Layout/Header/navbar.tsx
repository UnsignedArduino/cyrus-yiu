import React from "react";
import AutoLink from "@/components/Linkable/AutoLink";

export default function Navbar({
  current,
}: {
  current?: string;
}): React.ReactNode {
  const navbarItems = {
    Home: "/",
    Projects: "/projects",
  };

  return (
    <div className="navbar navbar-expand justify-content-center">
      <ul className="navbar-nav ">
        {Object.entries(navbarItems).map(([name, href]) => {
          return (
            <li key={name} className="nav-item">
              <AutoLink
                href={href}
                className={name == current ? "nav-link active" : "nav-link"}
              >
                {name}
              </AutoLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
