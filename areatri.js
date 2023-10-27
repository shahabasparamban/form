var side1 = 4;
var side2 = 6;
var side3 = 8;

var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s-side1) * (s-side2) * (s-side3)));
console.log(area);