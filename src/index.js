import createPlugin from "tailwindcss/plugin.js";
import theme from "./theme.js";

const { animation, keyframes, ...rest } = theme;

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = (api) => {
  const { matchUtilities, theme, addUtilities } = api;

  const animationProperties = Object.keys(rest);

  animationProperties.forEach((property) => {
    const name = `animate-${property}`;
    const css = `animation-${property}`;
    const values = theme(property);

    matchUtilities({ [name]: (value) => ({ [css]: value }) }, { values });
  });

  addUtilities({
    ".animate-ease": {
      "animation-timing-function": "ease",
    },
    ".animate-ease-in": {
      "animation-timing-function": "ease-in",
    },
    ".animate-ease-out": {
      "animation-timing-function": "ease-out",
    },
    ".animate-ease-in-out": {
      "animation-timing-function": "ease-in-out",
    },
    ".animate-linear": {
      "animation-timing-function": "linear",
    },
    ".animate-direction-normal": {
      "animation-direction": "normal",
    },
    ".animate-direction-reverse": {
      "animation-direction": "reverse",
    },
    ".animate-direction-alternate": {
      "animation-direction": "alternate",
    },
    ".animate-direction-alternate-reverse": {
      "animation-direction": "alternate-reverse",
    },
    ".animate-play-running": {
      "animation-play-state": "running",
    },
    ".animate-play-paused": {
      "animation-play-state": "paused",
    },
  });
};

/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme };

export default createPlugin(pluginCreator, pluginConfig);
