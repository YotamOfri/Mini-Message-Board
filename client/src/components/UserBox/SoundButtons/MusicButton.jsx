import { useState } from "react";
import On from "../../../assets/Photos/SoundButtons/MusicOn.svg";
import Off from "../../../assets/Photos/SoundButtons/MusicOff.svg";

export default function MusicButton() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMusic = () => {
    const audio = document.getElementById("background-music");
    if (audio) {
      if (isMuted) {
        audio.volume = 0.3;
        audio.play();
      } else audio.pause();
    }
    setIsMuted(!isMuted);
  };
  return (
    <div
      className="rounded-full bg-ContastColor flex justify-center items-center h-9 w-9 cursor-pointer hover:scale-105 duration-300 ease-in-out"
      onClick={toggleMusic}
    >
      <img src={isMuted ? Off : On} alt="Music Control" />
    </div>
  );
}
