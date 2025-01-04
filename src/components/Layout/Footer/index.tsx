import React from "react";
import BootstrapIcon from "@/components/Icon";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function FooterLink({
  href,
  icon,
  tooltip,
}: {
  href: string;
  icon: string;
  tooltip?: string;
}): React.ReactNode {
  const stuff = (
    <li className="ms-3">
      {/* Would use AutoLink but text-body-secondary doesn't work then */}
      <a
        href={href}
        className="text-body-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BootstrapIcon name={icon} />
      </a>
    </li>
  );
  return tooltip ? <Tippy content={tooltip}>{stuff}</Tippy> : stuff;
}

export default function Footer(): React.ReactNode {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2025 Cyrus Yiu
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <FooterLink
          href="https://github.com/UnsignedArduino"
          icon="github"
          tooltip="My GitHub account"
        />
        <FooterLink
          href="https://github.com/UnsignedArduino/cyrus-yiu"
          icon="code-square"
          tooltip="The source code for this website"
        />
      </ul>
    </footer>
  );
}
