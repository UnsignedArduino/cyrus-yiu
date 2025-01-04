import React from "react";
import Navbar from "@/components/Layout/Header/navbar";

export default function Header({
  current,
}: {
  current?: string;
}): React.ReactNode {
  return (
    <div className="text-center mt-5">
      <h1>Cyrus Yiu</h1>
      <Navbar current={current} />
    </div>
  );
}
