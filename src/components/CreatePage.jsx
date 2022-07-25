import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

export function CreatePage() {
  const [setHidden, setActive] = useOutletContext();

  setActive("create");
  return (
    <div>
      <Outlet context={[setHidden]}></Outlet>
    </div>
  );
}
