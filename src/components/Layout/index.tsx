import React from "react";
import Head from "next/head";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import BreadCrumbs from "@/components/Layout/BreadCrumbs";

type LayoutProps = {
  children: React.ReactNode;
  current?: string;
  title: string;
  description?: string;
  breadCrumbs?: {
    [title: string]: string;
  }[];
};

export default function Layout({
  children,
  current,
  title,
  description,
  breadCrumbs,
}: LayoutProps): React.ReactNode {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col d-none d-md-block" />
          <div className="col col-md-9 col-lg-8 col-xl-7">
            <Header current={current} />
            {breadCrumbs && <BreadCrumbs breadCrumbs={breadCrumbs} />}
            <main>{children}</main>
            <Footer />
          </div>
          <div className="col d-none d-md-block" />
        </div>
      </div>
    </>
  );
}
