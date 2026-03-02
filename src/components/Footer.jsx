import React from "react";
import { assets } from "../assets/assets";
import manas_logo from "../assets/manas_logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={manas_logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Manas is one of the best sites when it comes to online shopping for
            men. The finest of material, superior design and unbeatable style go
            into the making of our men’s shopping collection. Our range of
            online shopping men’s wear and Compared with other men’s shopping
            sites, Manas brings you the best price products which won’t hurt
            your pocket. With seasonal discounts on trendy casual wear, suits,
              and more, online shopping for men at Manas just
            gets even more irresistible!.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="/">Home</a>
            </li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 6399892882</li>
            <li>contact@manasBuy.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ manas.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
