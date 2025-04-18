const windowSize = 10;
let numberWindow = [];

export const getWindowState = () => {
  return [...numberWindow];
};

export const updateWindow = (newNumbers) => {
  const seen = new Set(numberWindow);

  for (const num of newNumbers) {
    if (!seen.has(num)) {
      numberWindow.push(num);
      seen.add(num);
    }

    while (numberWindow.length > windowSize) {
      numberWindow.shift(); 
    }
  }

  return [...numberWindow];
};
