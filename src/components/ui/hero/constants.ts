
export const GRADIENT_COLORS = {
  blue: [
    { color: "rgb(180, 176, 254)", start: "0%" },
    { color: "rgb(54, 50, 133)", start: "22.92%" },
    { color: "rgb(17, 13, 91)", start: "42.71%" },
    { color: "rgb(5, 3, 39)", start: "88.54%" },
  ],
  black: [
    { color: "#333333", start: "0%" },
    { color: "#292929", start: "22.92%" },
    { color: "#1F1F1F", start: "42.71%" },
    { color: "#0A0A0A", start: "88.54%" },
  ],
  purple: [
    { color: "#342456", start: "0%" },
    { color: "#2B1E48", start: "22.92%" },
    { color: "#22183A", start: "42.71%" },
    { color: "#110C1D", start: "88.54%" },
  ],
  green: [
    { color: "#116A67", start: "0%" },
    { color: "#0E5856", start: "22.92%" },
    { color: "#0B4745", start: "42.71%" },
    { color: "#062726", start: "88.54%" },
  ],
  skyblue: [
    { color: "#70D9FF", start: "0%" },
    { color: "#5CD3FF", start: "22.92%" },
    { color: "#47CEFF", start: "42.71%" },
    { color: "#0096CC", start: "88.54%" },
  ],
  red: [
    { color: "#931020", start: "0%" },
    { color: "#810E1C", start: "22.92%" },
    { color: "#6E0C18", start: "42.71%" },
    { color: "#37060C", start: "88.54%" },
  ],
}

export const GRADIENT_SIZES = {
  default: { width: "70%", height: "55%" },
  sm: { width: "50%", height: "35%" },
  lg: { width: "85%", height: "70%" },
}

export const GRADIENT_POSITIONS = {
  top: { x: "50%", y: "-10%" },
  center: { x: "50%", y: "50%" },
  bottom: { x: "50%", y: "110%" },
  left: { x: "-10%", y: "0%" },
  right: { x: "110%", y: "0%" },
}

export const TRANSITION_CONFIG = { type: "tween", ease: "easeInOut", duration: 0.5 }
