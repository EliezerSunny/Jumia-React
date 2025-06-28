
"use client";


import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function FooterDiv() {

  const year = new Date().getFullYear("Y");
  
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://www.jumia.com.ng"
              src="https://jumia-react.vercel.app/img/app-link.png"
              alt="Jumia Logo"
              name="JUMIA"
            /> 
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#">HELP CENTER</FooterLink>
                <FooterLink href="#">CONTACT US</FooterLink>
        <FooterLink href="#">TERMS &amp; CONDITIONS</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">PRIVACY &amp; COOKIE</FooterLink>
                <FooterLink href="#">BECOME A SELLER</FooterLink>
        <FooterLink href="#">REPORT A PRODUCT</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">SHIP YOUR PACKAGE</FooterLink>
                <FooterLink href="#">BLACK FRIDAY</FooterLink>
        <FooterLink href="#">ANNIVERSARY DEAL</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="https://github.com/EliezerSunny" by="EliezerSunny" year={year} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.facebook.com/eliezersunny" icon={BsFacebook} />
            <FooterIcon href="https://www.instagram.com/eliezersunny_" icon={BsInstagram} />
            <FooterIcon href="https://x.com/eliezersunny" icon={BsTwitter} />
            <FooterIcon href="https://github.com/EliezerSunny" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}


export default FooterDiv;