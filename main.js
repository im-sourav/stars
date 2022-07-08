
const SCALE = 4;
const MAX = 1000;
const FPS = 90;
const RUN = true;

let ww = window.innerWidth;
let wh = window.innerHeight;

let minSize = (wh > ww ? ww : wh) * SCALE;
let w = wh > ww ? "100vw" : "100vh";

/* functions */
const speedControl = (x, stars) => {
   let speed = map(x, 0, minSize / 4, 0, 100);
   stars.forEach((e) => {
      e.speed = speed;
   })
}

let stars = [];

const cvs = new Canvas(minSize, minSize);

cvs.size(w, w);
cvs.rect("#000");

for (let i = 0; i < MAX; i++) {
   stars[i] = new Star(cvs);
}

cvs.cvs.addEventListener("mousemove", (e) => {
   speedControl(e.clientX, stars);
});

cvs.cvs.addEventListener("touchmove", (e) => {
   speedControl(e.touches[0].clientX, stars);
});


function animate() {
   cvs.rect("#000");
   stars.forEach((e) => {
      e.update();
      e.draw();
   })
   setTimeout(() => {
      if (RUN) {
         animate();
      }
   }, 1000 / FPS)
}
animate(); 
