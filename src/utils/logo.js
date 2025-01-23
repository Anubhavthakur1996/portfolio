import keyboard from "../assets/audio/keyboard.ogg";

const logoClick = () => {
  const audioClip = new Audio(keyboard);
  audioClip.play();
};

export { logoClick };
