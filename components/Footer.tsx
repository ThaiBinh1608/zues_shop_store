import React from "react";

const Footer = () => {
  return (
    <footer className=" py-2 px-10 bottom-0 flex gap-2 justify-between items-center bg-black text-white max-sm:px-2 border-b-4">
      <div>
        <p>Zues Shop &copy; {new Date().getFullYear()}</p>
      </div>
      <div className="flex flex-col">
        <span>Liên hệ</span>
        <span>Email: admin@gmail.com</span>
        <span>SDT: 0909090909</span>
      </div>
    </footer>
  );
};

export default Footer;
