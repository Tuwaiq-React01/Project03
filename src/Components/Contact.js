import React, { useEffect, useState } from "react";
import NavB from "./NavB";

export default function Contact() {
  const [number, setNumber] = useState("");

  useEffect(() => {
    setNumber("050000000");
    return () => {};
  }, []);
  return (
    <div>
      <h1>Contact</h1>
      <h6>Phone: {number}</h6>
    </div>
  );
}
