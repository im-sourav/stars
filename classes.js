class Star {
  constructor(cvs) {
    this.hf = minSize / 2;
    this.x = random(-this.hf, this.hf);
    this.y = random(-this.hf, this.hf);
    this.z = random(minSize * 0.2, minSize);
    this.cvs = cvs;
    this.pz = this.z;
    this.speed = 50;
  }

  update() {
    if (this.z < this.speed) {
      this.x = random(-this.hf, this.hf);
      this.y = random(-this.hf, this.hf);
      this.z = random(minSize * 0.2, minSize);
      this.pz = this.z;
    }
    this.z += -this.speed;
  }
  
  draw() {
    let sx = map(this.x / this.z, -0.5, 0.5, -this.hf, this.hf);
    let sy = map(this.y / this.z, -0.5, 0.5, -this.hf, this.hf);
    let px = map(this.x / this.pz, -0.5, 0.5, -this.hf, this.hf);
    let py = map(this.y / this.pz, -0.5, 0.5, -this.hf, this.hf);
    let r = map(this.z, 0, minSize, 15, 0);

    this.cvs.color();
    this.cvs.circle(this.hf + sx, this.hf + sy, r);
    this.cvs.strock(255, 255, 255, 0.3);
    this.cvs.line(this.hf + px, this.hf + py, this.hf + sx, this.hf + sy, r);
    this.pz = this.z;
  }

}