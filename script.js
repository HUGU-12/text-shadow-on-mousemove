const text = document.querySelector('h1');
const body = document.querySelector('body');

function shadowMove(e){
  const width = body.offsetWidth;
  const height = body.offsetHeight;

  let {offsetX: x, offsetY: y} = e;

  if(this !== e.target){//if target is not body
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const distance = 400;

  //these calculations ensure that at the center of the body, no shadow effect is observable
  const xDistance = Math.round((x/width * distance) - (distance/2));
  const yDistance = Math.round((y/height * distance) - (distance/2));

  text.style.textShadow = `
  ${xDistance}px ${yDistance}px 0 rgb(2, 2, 48),
  ${-xDistance}px ${yDistance}px 0 rgb(219, 187, 7),
  ${yDistance}px ${-xDistance}px 0 green,
  ${-yDistance}px ${xDistance}px 0 blue
  `;
}

body.addEventListener('mousemove',shadowMove);