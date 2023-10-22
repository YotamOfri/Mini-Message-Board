import SubmitIcon from "../../../assets/Photos/SubmitIcon.svg";
import ErrorIcon from "../../../assets/Photos/ErrorIcon.svg";
import PropTypes from "prop-types";
import Loading from "../../events/Loading";
export default function SubmitButton({ isLoading, handleSubmit, isError }) {
  return (
    <button
      className="bg-BorderColor h-20 w-10 flex-shrink-0  bg-opacity-40 rounded-full flex items-center justify-center duration-300 ease-in-out hover:scale-105"
      onClick={handleSubmit}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loading></Loading>
      ) : isError ? (
        <img src={ErrorIcon} alt="" className=" w-7 h-7"></img>
      ) : (
        <img src={SubmitIcon} alt="" className=" w-7 h-7"></img>
      )}
    </button>
  );
}
SubmitButton.propTypes = {
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};
