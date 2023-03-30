import React from "react";

import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [Hours, setHours] = React.useState(0);
  const [Minutes, setMinutes] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHours((Hours) => {
        date = new Date();
        return date.getHours();
      });
      setMinutes((Minutes) => {
        date = new Date();
        return date.getMinutes();
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let date;

  return (
    <div className="w-full h-[200px] lg:h-[20vh] bottom-0 left-0">
      <div className="px-[30px] lg:px-[3vw] w-full h-full">
        <div className="border-t-2 border-neutral-200 flex flex-col md:flex-row gap-1 md:gap-10 text-center md:text-left w-full h-full items-center justify-between">
          <div className=" flex items-center h-full gap-10">
            <div>
              <h2 className="mb-3 uppercase font-normal text-xs tracking-[2px] text-neutral-400">
                Location
              </h2>
              <h2 className="uppercase font-bold text-sm text-neutral-900">
                Indonesia
              </h2>
            </div>
            <div>
              <h2 className="mb-3 uppercase font-normal text-xs tracking-[2px] text-neutral-400">
                Local time
              </h2>
              <h2 className="uppercase font-bold text-sm text-neutral-900">
                {Hours % 12 > 0 ? Hours % 12 : Hours}:{Minutes}
                {Hours >= 12 ? " pm" : " am"}
              </h2>
            </div>
          </div>
          <div className="mb-7 md:mb-0">
            <p
              className={`uppercase font-normal text-xs tracking-[2px] text-neutral-400 mb-3`}
            >
              Let&apos;s connect
            </p>
            <div className={`flex items-center gap-5 text-xl`}>
              <a
                href="https://www.linkedin.com/in/tony-aji-palguno-2302b71b5/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/tonyaji19"
                target="_blank"
                rel="noreferrer"
              >
                <div className="">
                  <FaGithub />
                </div>
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <div className="">
                  <AiOutlineInstagram />
                </div>
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <div className="">
                  <AiFillYoutube />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
