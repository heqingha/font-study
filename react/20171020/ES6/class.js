function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p1 = new Point(1, 2);
p1.toString();
console.log('p1',p1.toString());

class PointOther {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var p2 = new Point(1, 2);
console.log('p2',p2.toString());
