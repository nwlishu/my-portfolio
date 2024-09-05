import React, { Component } from "react";
import Link from "next/link";

const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <>
      <div className="flex justify-center items-center h-48 bg-home">
        <div>
          <h1>© Supaporn Nguanprasert 2024</h1>
        </div>
      </div>
    </>
  );
};
export default Footer;
