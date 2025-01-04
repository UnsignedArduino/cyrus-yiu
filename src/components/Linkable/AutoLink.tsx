import { isExternalLink } from "@/scripts/Utils/PageUtils";
import React from "react";
import Link from "next/link";

export default function AutoLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode | string;
  href: string | undefined;
  className?: string;
}): React.ReactNode {
  return href == undefined ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : isExternalLink(href) ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
