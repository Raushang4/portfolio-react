import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

// Navbar links
const navbar_links = [
  "home",
  "about",
  "work",
  "skills",
  "testimonial",
  "contact",
];

// Contact links
const contact_links = {
  email: "raushang4@gmail.com",
  phone: "+91-9304995677",
};

// Social links
const social_links = [
  {
    name: "Twitter",
    icon: <BsTwitter />,
    url: "http://twitter.com",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "http://facebook.com",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    url: "http://github.com",
  },
];

// Source code
const source_code = "https://github.com/raushang4raushang4/portfolio-react";

// links
const links = {
  navbar_links,
  contact_links,
  social_links,
  source_code,
};

export default links;
