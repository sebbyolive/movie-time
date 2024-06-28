import { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";
const Main = ({ tempMovieData, tempWatchedData, average, children }) => {
  return <main className="main">{children}</main>;
};
export default Main;
