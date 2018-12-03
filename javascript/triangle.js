var triangle = function() {

  var A = document.getElementById('a').value;
  var B = document.getElementById('b').value;
  var C = document.getElementById('c').value;

  if ((A + B > C) && (B + C > A) && (A + C > B)) {
    if (A == B && A == C && B == C) {
      alert("Equilateral Triangle");
    } else if (A == B || A == C || B == C) {
      alert("Isosceles Triangle");
    } else {
      alert("Scalene Triangle");
    }
  } else {
    alert("Not a triangle")
  }
}
