export default function initWallComponent () {
  const loopButton = document.getElementById('loop-button');
  loopButton.onclick = function () {
    createMainWall();
    inputLoop();
    createBrickWall();
    bindDemolishButtonAction();
  };
}

const bindDemolishButtonAction = function(){
  const demolishButton = document.getElementById('demolish-button');
  demolishButton.onclick = function () {
    tearDownWall();
  }
}

const tearDownWall = function()
{
  const greatWall = document.getElementById("great-wall");
  const elem = document.getElementById("great-wall");
  if (greatWall === null){
    alert("Nothing to tear down");
  }
  else
  {
    elem.parentNode.removeChild(elem);
  }
}

const createMainWall = function(){
  let greatWall = document.getElementById("great-wall");
  const wallContainer = document.getElementById("wall-container");
  if (greatWall === null){
      greatWall = document.createElement("div");
      greatWall.setAttribute("id", "great-wall");
      wallContainer.append(greatWall);
  }
}

const createBrickWall= function (type, classList){
  const element = document.createElement(type);
  element.classList = classList;
  return element;
}

const inputLoop = function (){
  let loops = document.getElementById("looper").value;
  let typeBrick = document.getElementById("brick-type").selectedIndex;
  const greatWall = document.getElementById('great-wall');
  for (let step = 0; step < loops; step++) {
    if (typeBrick === 0){
      const redBrickWall = createBrickWall("div","red-brick-wall")
      greatWall.appendChild(redBrickWall);
    }
    else {
      const grayBrickWall = createBrickWall("div","gray-brick-wall")
      greatWall.appendChild(grayBrickWall);
    }
  }
}
