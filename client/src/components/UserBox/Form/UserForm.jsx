import PropTypes from "prop-types";
export default function UserForm({
  text,
  setText,
  username,
  setUsername,
  Error,
}) {
  return (
    <>
      <div className="h-[30%] w-full relative">
        <input
          type="text"
          placeholder="Username"
          className={`border border-transparent ${
            Error && !username.length > 0 && "border-red-300"
          } outline-none rounded-lg focus:border-white/50 bg-BorderColor bg-opacity-40 px-2 h-10 w-full shadow-md shadow-transparent duration-300 ease-in-out focus:shadow-white/20`}
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        {Error && username.length === 0 && (
          <div className="absolute top-3 right-2 text-[10px] text-red-300 md:opacity-100 opacity-0 pointer-events-none">
            Fill Out This Field
          </div>
        )}
      </div>
      <div className="h-[70%] w-full relative">
        <textarea
          placeholder="Text"
          className={`border border-transparent ${
            Error && !text.length > 0 && "border-red-300"
          } outline-none rounded-lg bg-BorderColor focus:border-white/50 bg-opacity-40 p-2 w-full h-full duration-300 ease-in-out shadow-md shadow-transparent focus:shadow-AccentColor/20`}
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
          style={{ resize: "none" }}
        ></textarea>
        {Error && text.length === 0 && (
          <div className="absolute top-3 right-2 text-[10px] text-red-300 md:opacity-100 opacity-0 pointer-events-none">
            Fill Out This Field
          </div>
        )}
      </div>
    </>
  );
}
UserForm.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  Error: PropTypes.bool,
};
