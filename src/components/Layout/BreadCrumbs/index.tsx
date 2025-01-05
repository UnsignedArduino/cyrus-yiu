import Link from "next/link";
import React from "react";

export type BreadCrumbsList = {
  [title: string]: string;
}[];

export default function BreadCrumbs({
  breadCrumbs,
}: {
  breadCrumbs: BreadCrumbsList;
}): React.ReactNode {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadCrumbs.map((value, index, array) => {
          const v = Object.entries(value)[0];
          const pageTitle = v[0];
          const link = v[1];
          if (index === array.length - 1) {
            return (
              <li
                className="breadcrumb-item active"
                aria-current="page"
                key={pageTitle}
              >
                {pageTitle}
              </li>
            );
          } else {
            return (
              <li className="breadcrumb-item" key={pageTitle}>
                <Link href={link}>{pageTitle}</Link>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
}
