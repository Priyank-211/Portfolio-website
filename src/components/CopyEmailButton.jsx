import { button } from "motion/react-client";
import React from "react";
import copy from "../assets/copy.svg";
import { useState } from "react";
import Copydone from "../assets/copy-done.svg";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setcopied] = useState(false);
  const email = "priyank2112006@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 2000);
  };
  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden "
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2 "
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src={Copydone} alt="copydone" className="w-5" />
            Email has Copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src={copy} alt="copy button" className="w-5" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
