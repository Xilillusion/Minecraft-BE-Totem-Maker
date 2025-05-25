// Random body background image rotation logic with blur and dissolve
const bgImages = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
];

const body = document.body;
let currentIdx = Math.floor(Math.random() * bgImages.length);

// Create two overlay divs for crossfade/dissolve
function createOverlay(z) {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = 0;
  div.style.left = 0;
  div.style.width = '100vw';
  div.style.height = '100vh';
  div.style.zIndex = z;
  div.style.pointerEvents = 'none';
  div.style.transition = 'opacity 10.0s';
  div.style.opacity = 1;
  div.style.background = '';
  div.style.backgroundPosition = 'center center';
  div.style.backgroundRepeat = 'no-repeat';
  div.style.backgroundSize = 'cover';
  div.style.filter = 'blur(16px) brightness(0.95)';
  return div;
}

let overlayA = createOverlay('-3');
let overlayB = createOverlay('-2');
overlayA.style.backgroundImage = `url('${bgImages[currentIdx]}')`;
overlayB.style.opacity = 0;
document.body.prepend(overlayB);
document.body.prepend(overlayA);

// Remove body background color
body.style.background = 'none';

let showingA = true;

function setBg(idx) {
  if (showingA) {
    overlayB.style.backgroundImage = `url('${bgImages[idx]}')`;
    overlayB.style.opacity = 1;
    overlayA.style.opacity = 0;
  } else {
    overlayA.style.backgroundImage = `url('${bgImages[idx]}')`;
    overlayA.style.opacity = 1;
    overlayB.style.opacity = 0;
  }
  showingA = !showingA;
}

setInterval(() => {
  let nextIdx;
  do {
    nextIdx = Math.floor(Math.random() * bgImages.length);
  } while (nextIdx === currentIdx && bgImages.length > 1);
  currentIdx = nextIdx;
  setBg(currentIdx);
}, 50000); // 50 seconds