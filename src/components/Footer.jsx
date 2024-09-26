// import React from "react";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
// import { Link } from "react-router-dom";

import Link from "react"

function Footer() {
  const footerLinks = [
    {
      heading: "About",
      footerlinks: [
        "How it works",
        "Partnership",
        
      ],
    },
    
    {
      heading: "Socials",
      footerlinks: ["Instagram", "Twitter", "Facebook"],
    },
  ];

  const Links = footerLinks.map((link) => {
    return (
      <article key={crypto.randomUUID()}>
        <h1>{link.heading}</h1>
        <ul>
          {link.footerlinks.map((item) => {
            return <li key={crypto.randomUUID()}>{item}</li>;
          })}
        </ul>
      </article>
    );
  });
  return (
    <>
      <footer>
        <div className="display-flex justify-space-between">
          <section className="footer-img">
            {/* <Link to="/">
              <img src={Logo} alt="logo" />
            </Link> */}
            <div>
              <FaFacebook />
              <BsTwitterX />
              <FaInstagram />
            </div>
          </section>
          <section className="justify-space-around w-[50%] display-flex">{Links}</section>
        </div>

        <hr />
        <section className=" display-flex py-5 px-6 justify-space-between text-blue-700 font-light">
          <p>©2024 MbiatkeNkanta. All rights reserved</p>
          <div className="gap [90px]">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
