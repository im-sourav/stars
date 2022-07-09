class Star {
  constructor(cvs) {
    this.hf = minSize / 2;
    this.x = random(-this.hf, this.hf);
    this.y = random(-this.hf, this.hf);
    this.z = random(minSize * 0.2, minSize);
    this.cvs = cvs;
    this.pz = this.z;
    this.speed = 50;
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }

  updateColor(y) {
    if (y >= 510) {
      this.r = 255;
      this.g = 0;
      this.b = Math.round(y % 510);
    }else if (y >= 255) {
      this.r = 255;
      this.g = Math.round(y % 255);
      this.b = 255;
    }else {
      this.r = 255 - Math.round(y);
      this.g = 255;
      this.b = 0;
    }
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

    this.cvs.color(this.r, this.g, this.b);
    this.cvs.circle(this.hf + sx, this.hf + sy, r);
    this.cvs.strock(this.r, this.g, this.b, 0.3);
    this.cvs.line(this.hf + px, this.hf + py, this.hf + sx, this.hf + sy, r);
    this.pz = this.z;
  }

}