import { useState } from "react";
import "../css/Home.css";
import Title from "./Title";
import Profilecard from "./Profilecard";

export default function Home() {
  return (
    <div>
      <Title title="Home" />
      <Profilecard />
    </div>
  );
}
