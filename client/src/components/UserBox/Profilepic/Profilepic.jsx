import { useState } from "react";
import Picturesmenu from "./Picturesmenu";
import SelectSVG from "../../../assets/Photos/Select.svg";
import useImageLoader from "./useImageLoader";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
export default function Profilepic({ picture, setPicture }) {
  const { Image } = useImageLoader(picture);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
      <div>
        <img
          src={Image}
          alt="Profile"
          className="w-20 rounded-full border-2 border-BorderColor"
        />
        <div className="absolute top-0 bg-ContastColor bg-opacity-70 flex items-center justify-center w-full h-full rounded-full duration-300 ease-in-out opacity-0 hover:opacity-100">
          <img src={SelectSVG} className="w-8"></img>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Picturesmenu
            setPicture={setPicture}
            picture={picture}
          ></Picturesmenu>
        )}
      </AnimatePresence>
    </div>
  );
}
Profilepic.propTypes = {
  picture: PropTypes.number,
  setPicture: PropTypes.func,
};
