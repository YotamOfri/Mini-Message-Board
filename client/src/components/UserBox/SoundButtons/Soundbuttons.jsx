import MusicButton from "./MusicButton";
import Soundbutton from "./SoundButton";
import BackgroundMusic from "../../../assets/Sound/InterstellerLofi.mp3";
export default function Soundbuttons() {
  return (
    <div className="flex gap-2 pb-2">
      <audio className="hidden" id="background-music" controls loop>
        <source src={BackgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Soundbutton></Soundbutton>
      <MusicButton></MusicButton>
    </div>
  );
}
