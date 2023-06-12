import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="mt-5 flex flex-col border-t border-gray-100 text-black-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
          />
          <p className="text-base text-gray-700">
            Car Hub 2023
            <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="footer__link"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16">
        <p className="w-full text-center sm:w-auto sm:text-left">
          @2023 Car Hub. All rights reserved
        </p>
        <div className="footer__copyrights-link">
          <Link
            href="/"
            className="text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
