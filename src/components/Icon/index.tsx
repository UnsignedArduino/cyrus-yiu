import React from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function BootstrapIcon({
  name,
}: {
  name: string;
}): React.ReactNode {
  return <i className={`bi-${name}`} />;
}
