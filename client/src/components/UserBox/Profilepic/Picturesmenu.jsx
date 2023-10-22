import { motion } from "framer-motion";
import Logo1 from "../../../assets/Photos/Logos/Logo1.png";
import Logo2 from "../../../assets/Photos/Logos/Logo2.png";
import Logo3 from "../../../assets/Photos/Logos/Logo3.png";
import PropTypes from "prop-types";
export default function Picturesmenu({ setPicture, picture }) {
  const logos = [Logo1, Logo2, Logo3];
  const Options = logos.map((logo, index) => {
    return (
      <div
        key={index}
        className={`flex items-center hover:border-AccentColor gap-2 text-sm cursor-pointer border p-1 rounded-xl duration-200 ease-in-out ${
          index + 1 === picture && "border-AccentColor"
        }`}
        onClick={() => setPicture(index + 1)}
      >
        <img
          src={logo}
          alt=""
          className="w-12 rounded-full border-2 border-BorderColor"
        />
        Logo {index + 1}
      </div>
    );
  });
  return (
    <motion.div
      initial={{ height: "0px", opacity: 0 }}
      animate={{ height: "200px", opacity: 1 }}
      exit={{ height: "0px", opacity: 0 }}
      className="bg-Maincolor rounded-lg border-2 border-AccentColor border-opacity-60 absolute bottom-[80px] md:-right-9 -right-12 w-36 overflow-hidden flex flex-col justify-center gap-2 px-1"
    >
      {Options}
    </motion.div>
  );
}
Picturesmenu.propTypes = {
  picture: PropTypes.number,
  setPicture: PropTypes.func,
};
