import React from "react";
import { IContext } from "./MainContext.types";

export const defaultState = {
  lastPage: 0,
  setPage: function () {},
};

export const MainContext = React.createContext<IContext>(defaultState);
