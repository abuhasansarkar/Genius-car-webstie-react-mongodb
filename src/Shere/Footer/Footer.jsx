import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-slate-900 py-24">
      <footer className="footer p-10 text-base-content text-white lg:w-[80%] mx-auto">
        <div>
          <img src={logo} alt="logo" />
          <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
