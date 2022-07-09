const SCALE = 4;
const MAX = 1000;
const FPS = 90;
const RUN = true;

let ww = window.innerWidth;
let wh = window.innerHeight;

let minSize = (wh > ww ? ww : wh) * SCALE;
let w = wh > ww ? "100vw" : "100vh";

/* functions */
const control = (x, y, stars) => {
   let speed = map(x, 0, minSize / SCALE, 0, 100);
   let color = map(y, 0, minSize / SCALE, 0, 765);
   stars.forEach((e) => {
      e.speed = speed;
      e.updateColor(color);
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
   control(e.clientX - e.target.offsetLeft, e.clientY - e.target.offsetTop, stars);
});

cvs.cvs.addEventListener("touchmove", (e) => {
   control(e.touches[0].clientX - e.target.offsetLeft, e.touches[0].clientY - e.target.offsetTop, stars); 
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
