const initWallComponent = () => {
  bindDemolishButtonAction();
  bindBuildButton();
}

export default initWallComponent;

const bindBuildButton = () => {
  const loopButton = document.getElementById('loop-button');
  loopButton.onclick = () => {
    inputLoop();
  }
}

const bindDemolishButtonAction = () => {
  const demolishButton = document.getElementById('demolish-button');
  demolishButton.onclick = () => {
    tearDownWall();
  }
}

const tearDownWall = () => {
  const greatWall = document.getElementById('great-wall');
  while (greatWall.lastElementChild){
    greatWall.removeChild(greatWall.lastElementChild);
  }
}

const createBrick = (type, classList) => {
  const element = document.createElement(type);
  element.classList = classList;
  return element;
}

const inputLoop = () => {
  let loops = document.getElementById("looper").value;
  let typeBrick = document.getElementById("brick-type").value;
  const greatWall = document.getElementById('great-wall');
  for (let step = 0; step < loops; step++) {
      const redBrickWall = createBrick("div",  `${typeBrick}-brick-wall`);
      greatWall.appendChild(redBrickWall);
  }
}
