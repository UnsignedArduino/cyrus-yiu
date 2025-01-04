import React from "react";
import Head from "next/head";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

type LayoutProps = {
  children: React.ReactNode;
  current?: string;
  title: string;
  description?: string;
};

export default function Layout({
  children,
  current,
  title,
  description,
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
          <div className="col-auto col-md-8 col-lg-7 col-xl-6">
            <Header current={current} />
            <main>{children}</main>
            <Footer />
          </div>
          <div className="col d-none d-md-block" />
        </div>
      </div>
    </>
  );
}
