import { String } from "./String";
import { NOTES, KEY_TO_NOTE } from "../../global/constants";
import "./Guitar.css";
import { useState, useEffect } from "react";
import soundImports from "./Sounds";

export function Guitar() {
  const [pressedKeys, setPressedKeys] = useState([]);

  const handleKeyDown = (e) => {
    const note = KEY_TO_NOTE[e.key];
    if (note && !pressedKeys.includes(note)) {
      setPressedKeys([...pressedKeys, note]);
      playSound(note);
    }
  };

  const handleKeyUp = (e) => {
    const note = KEY_TO_NOTE[e.key];
    if (note) {
      setPressedKeys(pressedKeys.filter((pressedKey) => pressedKey !== note));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [pressedKeys]);

  const playSound = (note) => {
    const sound = soundImports[note];
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  return (
    <div className="fretboard">
      {NOTES.map((note, index) => (
        <String
          key={index}
          note={note}
          isPressed={pressedKeys.includes(note)}
        />
      ))}
    </div>
  );
}
