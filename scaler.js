// Scales the current project to the full screen without streching
const element = document.getElementsByClassName("web")[0];
const aspect = Math.min(window.innerWidth, window.innerHeight);
const scale = aspect / element.style["width"].match(/\d+/g)[0]; // divide this by the height if you want the joypad
element.style["background"] = "black";
element.style["left"] = "50%";
element.style["transform"] = `translateX(-50%) scale(${scale})`;
element.style["transform-origin"] = `top center`;
