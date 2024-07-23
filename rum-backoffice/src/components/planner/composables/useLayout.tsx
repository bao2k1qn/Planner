import React from "react";
import { LayoutContext, LayoutContextProps } from "../Layout";

function useLayout() {
  const context = React.useContext<LayoutContextProps | null>(LayoutContext);

  if (!context) {
    throw new Error("useLayout must be used within a <Layout />");
  }

  return context;
}

export default useLayout;
