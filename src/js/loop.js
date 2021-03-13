export default function initLoop () {
  const loopButton = document.getElementById('loop-button');
  loopButton.onclick = function () {
    inputLoop();
    createGreatWall();
  };
}

const createGreatWall= function (type, classList = "red-brick"){
  const element = document.createElement(type);
  element.classList = classList;
  return element;
}

const inputLoop = function (){
  let loops = document.getElementById("looper").value;
  let typeBrick = document.getElementById("brick-type").selectedIndex;
  if (typeBrick == "0"){
    for (let step = 0; step < loops; step++) {
      const redBrick = createGreatWall("div","red-brick")
      const greatWall = document.getElementById('great-wall');
      greatWall.appendChild(redBrick);
    }
  }
  else {
    for (let step = 0; step < loops; step++) {
      const brownBrick = createGreatWall("div","brown-brick")
      const greatWall = document.getElementById('great-wall');
      greatWall.appendChild(brownBrick);
    }
  }
}
