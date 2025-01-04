import React from "react";
import BootstrapIcon from "@/components/Icon";

export default function Footer(): React.ReactNode {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2025 Cyrus Yiu
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          {/* Would use AutoLink but text-body-secondary doesn't work then */}
          <a
            href="https://github.com/UnsignedArduino"
            className="text-body-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BootstrapIcon name="github" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
