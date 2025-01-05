import React from "react";
import ExportedImage from "next-image-export-optimizer";
import AutoLink from "@/components/Linkable/AutoLink";
import { StaticImageData } from "next/image";

export default function ProjectCard({
  children,
  image,
  imageAlt,
  title,
  subtitle,
  links,
}: {
  children: React.ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
  title: string;
  subtitle: string;
  links: {
    [title: string]: string;
  }[];
}): React.ReactNode {
  return (
    <div className="card h-100">
      {image && imageAlt && (
        <ExportedImage
          className="card-img-top"
          src={image}
          alt={imageAlt}
          layout="responsive"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <p className="card-text">{children}</p>
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
