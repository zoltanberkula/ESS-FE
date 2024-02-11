let colorStack = [
  "#111D13",
  "#415D43",
  "#22577A",
  "#4d9385",
  "#112d31",
  "#3f5246",
  "#4a776e",
  "#457578",
];

export const getTheColorStack = () => {
  return colorStack;
};

export const pushToColorStack = (color) => {
  colorStack.push(color);
};

export const dropFromColorStack = (color) => {
  colorStack.splice(colorStack.findIndex(color), 1);
};

export const getRandomFromColorStack = () => {
  return Math.floor(Math.random() * colorStack.length);
};
