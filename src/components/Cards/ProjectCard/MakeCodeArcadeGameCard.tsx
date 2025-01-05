import React from "react";
import ExportedImage from "next-image-export-optimizer";
import AutoLink from "@/components/Linkable/AutoLink";
import { StaticImageData } from "next/image";

export default function MakeCodeArcadeGameCard({
  children,
  images,
  title,
  badge,
  date,
  gameLinks,
  links,
  cardTheme,
}: {
  children: React.ReactNode;
  images: {
    [image: string]: StaticImageData;
  }[];
  title: string;
  badge?: string;
  date: string;
  gameLinks: {
    [title: string]: string;
  }[];
  links: {
    [title: string]: string;
  }[];
  cardTheme?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}): React.ReactNode {
  return (
    <div
      className={cardTheme ? `card border-${cardTheme} h-100` : "card h-100"}
    >
      {images.map((value) => {
        const v = Object.entries(value)[0];
        const imageAlt = v[0];
        const image = v[1];
        return (
          <ExportedImage
            key={imageAlt}
            className="card-img-top"
            src={image}
            alt={imageAlt}
            layout="responsive"
          />
        );
      })}
      <div className="card-body">
        <h5 className="card-title">
          {title}
          {badge && (
            <>
              {" "}
              <small>
                <span className={`badge text-bg-${cardTheme}`}>{badge}</span>
              </small>
            </>
          )}
        </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{date}</h6>
        <p className="card-text">{children}</p>
        <p className="card-text">
          {gameLinks.map((value) => {
            const v = Object.entries(value)[0];
            const text = v[0];
            const href = v[1];
            return (
              <AutoLink
                key={text}
                href={href}
                className={
                  (cardTheme ? `btn btn-${cardTheme}` : "btn btn-secondary") +
                  " me-2 mb-2"
                }
              >
                {text}
              </AutoLink>
            );
          })}
        </p>
        {links.map((value) => {
          const v = Object.entries(value)[0];
          const text = v[0];
          const href = v[1];
          return (
            <AutoLink key={text} href={href} className="card-link">
              {text}
            </AutoLink>
          );
        })}
      </div>
    </div>
  );
}
