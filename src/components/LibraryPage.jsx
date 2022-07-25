import React from "react";
import { LibraryResources } from "./LibraryResources";
import { useOutletContext } from "react-router-dom";

export function LibraryPage() {
  const [active, setActive] = useOutletContext();
  setActive("library");
  return (
    <div className={"page-width"}>
      <LibraryResources />
    </div>
  );
}
