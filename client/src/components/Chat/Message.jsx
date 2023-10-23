import useImageLoader from "./LoadProfilePic";
import PropTypes from "prop-types";
export default function Message({ message }) {
  const { Image } = useImageLoader(message.picture);
  return (
    <div className="w-full  border border-BorderColor flex gap-2 outline-none rounded-lg bg-Maincolor bg-opacity-40 p-2 duration-300 ease-in-out">
      <div>
        <img
          src={Image}
          alt=""
          className="w-16 rounded-full border-2 border-BorderColor"
        />
      </div>
      <div className="text-sm flex flex-col justify-between w-full">
        <h2 className="text-gray-500 px-2">{message.username}</h2>
        <h1 className="px-1 h-11 flex items-center  bg-BorderColor/30 w-full rounded-lg overflow-scroll">
          {message.text}
        </h1>
      </div>
    </div>
  );
}
Message.propTypes = {
  message: PropTypes.object,
};
