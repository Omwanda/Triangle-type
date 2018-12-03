var triangle = function() {

  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = document.getElementById('c').value;

  if ((A+B>C) && (B+C>A) && (A+C>B)) {
    if (A==B && A==C && B==C) {
        alert ("Equilateral Triangle");
      } else if (A==B || A==C || B == C) {
      alert ("Isosceles Triangle");
}
  else {
    alert ("Not a triangle")
