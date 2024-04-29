import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content bottom-0 left-0">
      <aside>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/619/126/small_2x/23-03.jpg"
          style={{
            width: "50px",
            height: "50px",
            border: "2px solid rgb(23, 152, 175)",
          }}
        ></img>
        <p>
          Dream<span style={{ color: "rgb(23, 152, 175)" }}>Home</span>
          <br />
          Providing Real estate homes
        </p>
      </aside>
      <nav>
        <h6 className="footer-title" style={{ color: "rgb(23, 152, 175)" }}>
          Services
        </h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title" style={{ color: "rgb(23, 152, 175)" }}>
          Company
        </h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title" style={{ color: "rgb(23, 152, 175)" }}>
          Legal
        </h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
