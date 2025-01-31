import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#222e3d] text-gray-300">
      <footer className="container mx-auto p-10">
        <div className=" text-center  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <nav className="cursor-pointer">
            <h6 className="footer-title mb-2">General links</h6>
            <hr className="w-24 mx-auto mb-2 text-[#767987]" />
            <p className="link link-hover">Branding</p>
            <p className="link link-hover">Design</p>
            <p className="link link-hover">Marketing</p>
            <p className="link link-hover">Advertisement</p>
          </nav>
          <nav>
            <h6 className="footer-title  mb-2">Site highlights</h6>
            <hr className="w-24 mx-auto mb-2 text-[#767987]" />
            <p className="link link-hover">About us</p>
            <p className="link link-hover">Contact</p>
            <p className="link link-hover">Jobs</p>
            <p className="link link-hover">Press kit</p>
          </nav>
          <nav>
            <h6 className="footer-title  mb-2">Help Centre</h6>
            <hr className="w-24 mx-auto mb-2 text-[#767987]" />
            <p className="link link-hover">Terms of use</p>
            <p className="link link-hover">Privacy policy</p>
            <p className="link link-hover">Cookie policy</p>
          </nav>
          <nav>
            <h6 className="footer-title  mb-2">Education agents</h6>
            <hr className="w-32 mx-auto mb-2 text-[#767987]" />
            <p className="link link-hover">Twitter</p>
            <p className="link link-hover">Instagram</p>
            <p className="link link-hover">Facebook</p>
            <p className="link link-hover">GitHub</p>
          </nav>
          <nav>
            <h6 className="footer-title  mb-2">Login</h6>
            <hr className="w-14 mx-auto mb-2 text-[#767987]" />
            <p className="link link-hover">Features</p>
            <p className="link link-hover">Enterprise</p>
            <p className="link link-hover">Security</p>
            <p className="link link-hover">Pricing</p>
          </nav>
          <nav>
            <h6 className="footer-title  mb-2">Education Provider</h6>
            <hr className="w-34 mx-auto mb-2 text-[#767987]" />
            <p className="link link-hover">Mac</p>
            <p className="link link-hover">Windows</p>
            <p className="link link-hover">iPhone</p>
            <p className="link link-hover">Android</p>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
